import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController} from "@ionic/angular";
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";
import {ApiService} from "../providers/api";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-solicitud-saldo',
  templateUrl: './solicitud-saldo.component.html',
  styleUrls: ['./solicitud-saldo.component.scss'],
})
export class SolicitudSaldoComponent implements OnInit {

  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  foto: string;
  constructor(public modalController: ModalController,public mrn:Mrn,private router:Router,public api:ApiService,
              public alertController: AlertController,private camera: Camera) { }

  ngOnInit() {
  }
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  cambiarValor(valor: any) {
    this.mrn.formTransaccion.patchValue({
      valor:valor
    })
  }
  async solicitarSaldo() {

    const alerta = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'MRN Colombia',
      message: '¿Desea realizar la solicitud de saldo '+ (this.mrn.formTransaccion.value['tipo_transaccion']=='SSCR'?'Credito':'Contado')+' por un valor de $'+ this.mrn.formTransaccion.value['valor']+'?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
          }
        }, {
          text: 'Aceptar',
          id: 'confirm-button',
          handler: () => {
            let obj = {
              nodo : this.api.nodoActual['id'],
              usuario: this.api.usuario['id'],
              tipoServicio: this.mrn.formTransaccion.value['tipoServicio'],
              tipo_transaccion : this.mrn.formTransaccion.value['tipo_transaccion'],
              medioSolicitud: 'Movil',
              valor: this.mrn.formTransaccion.value['valor'],
              saldo_pendiente_pago:this.mrn.formTransaccion.value['valor'],
              soporte:this.mrn.formTransaccion.value['soporte']?this.mrn.formTransaccion.value['soporte']:'Pendiente'
            }
            this.mrn.presentLoading()
            this.api.post_soap('solicitar_saldo',obj).subscribe(
              data => {
                let respuesta = JSON.parse(data)
                if(respuesta.data){
                  this.mrn.transaccionSeleccionada = respuesta.data;
                  //this.mrn.getMisSolicitudesSaldo();
                  this.mrn.getMiCredito()
                  this.mrn.getMisBolsasDinero();
                  this.mrn.formTransaccion.reset();
                  this.mrn.verSubirArchivo = data.tipo_transaccion == 'SSC' ? true : false;
                  this.modalController.dismiss({
                    'dismissed': true
                  });
                }
                this.mrn.loadingController.dismiss();
                alert(respuesta.mensaje[0]);
                if(respuesta.mensaje[1]){
                  alert(respuesta.mensaje[1]);
                }

              }
            )
          }
        }
      ]
    });
    await alerta.present();
  }

  tomar_foto(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.foto = base64Image;
      this.mrn.formTransaccion.patchValue({
        soporte:this.foto
      })
    }, (err) => {
      // Handle error
    });
  }


  validarSoporte() {
    let soporte = this.mrn.formTransaccion.get('soporte');
    if(this.mrn.formTransaccion.value['tipo_transaccion'] == 'SSCR'){
      soporte.removeValidators(Validators.required)
    }else {
      soporte.setValidators(Validators.required)
    }
    soporte.updateValueAndValidity();
  }
}
