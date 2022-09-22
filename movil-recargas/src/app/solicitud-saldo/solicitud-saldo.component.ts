import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController} from "@ionic/angular";
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";
import {ApiService} from "../providers/api";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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
    const alert = await this.alertController.create({
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
            this.mrn.formTransaccion.patchValue({
              nodo_id: this.api.nodoActual['id'],
              usuario_id: this.api.usuario['id'],
              tipoServicio:this.api.nodoActual['tipoComision'],
              estado: 'Pendiente',
              estadoPago: (this.mrn.formTransaccion.value['tipo_transaccion'] == 'SSCR')?'Pendiente':'Pago en revision',
              medioSolicitud: 'Otro',
              ultimoSaldo: 0,
              dias_mora: 0,
              fecha_aprobacion: null,
              fecha_pago: null,
              saldo_pendiente_pago: (this.mrn.formTransaccion.value['tipo_transaccion'] == 'SSCR')?this.mrn.formTransaccion.value['valor']:0,
            });
            if (this.mrn.formTransaccion.value['tipo_transaccion'] == 'SSCR') {
              if(this.mrn.Micredito.montoDisponible >= this.mrn.formTransaccion.value['valor']){
                this.api.post_soap('verificar_numero_sol_cred_dia', this.mrn.formTransaccion.value)
                  .subscribe(
                    data => {
                     this.mrn.mensajes(data)
                      if (data != 'Ha superado el máximo de solicitudes de crédito diarias autorizadas por su distribuidor.') {
                        this.mrn.addTransaccion();
                      }
                    }
                  )
              }else {
                this.mrn.mensajes('El valor solicitado supera el monto de credito disponible.')
              }
            } else {
              this.mrn.addTransaccion();
            }
          }
        }
      ]
    });
    await alert.present();
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
}
