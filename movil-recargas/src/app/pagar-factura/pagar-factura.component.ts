import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-pagar-factura',
  templateUrl: './pagar-factura.component.html',
  styleUrls: ['./pagar-factura.component.scss'],
})
export class PagarFacturaComponent implements OnInit {
  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  constructor(public modalController: ModalController,public mrn:Mrn,private router:Router,private camera: Camera) {}

  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  foto: string;

  ngOnInit() {

  }
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  guardarPago() {
    this.mrn.formPagos.patchValue({
      transaccion_id: this.mrn.transaccionSeleccionada.id,
    });
    this.mrn.abonar_factura(this.mrn.formPagos.value);
  }
  tomar_foto(){
    /*this.mrn.formPagos.patchValue({
      soporte:'https://firebasestorage.googleapis.com/v0/b/recargas-326621.appspot.com/o/pago_facturas%2Fsoporte_pago_2555?alt=media&token=b575a806-0c81-4202-bf42-1af85a95b2d8'
    })*/
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.foto = base64Image;
      this.mrn.formPagos.patchValue({
        soporte:this.foto
      })
    }, (err) => {});
  }
}
