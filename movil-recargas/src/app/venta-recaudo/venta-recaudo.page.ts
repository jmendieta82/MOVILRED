import { Component, OnInit } from '@angular/core';
import { ApiService } from '../providers/api';
import {Mrn} from "../providers/mrn";
import {ModalController} from "@ionic/angular";
import { ConveniosComponent } from '../convenios/convenios.component';
import {ResumenVentaComponent} from "../resumen-venta/resumen-venta.component";
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx'


@Component({
  selector: 'app-venta-recaudo',
  templateUrl: './venta-recaudo.page.html',
  styleUrls: ['./venta-recaudo.page.scss'],
})
export class VentaRecaudoPage implements OnInit {
  title = 'pruebaimpresora';
  texto = "escriba algo";
  tipo_pago = false
  constructor(public api:ApiService,public mrn:Mrn,public modalController: ModalController,
              private barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit() {
    //this.mrn.get_convenios_practisistemas()
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ConveniosComponent,
    });
    return await modal.present();
  }


  async present_resumen_ventas() {
    this.mrn.obj_venta = '';
    let val = this.tipo_pago?this.mrn.formVentasRecaudo.value['valor']:this.mrn.factura_consultada.valorPago
    this.mrn.formVentasRecaudo.patchValue({
      convenio:this.mrn.convenio_seleccionado?this.mrn.convenio_seleccionado.nombre:this.mrn.factura_consultada.nconvenio,
      valor:val,
      })
    if(this.mrn.formVentasRecaudo.value['valor']){
      this.mrn.obj_venta = this.mrn.formVentasRecaudo.value
      const modal = await this.modalController.create({
        component: ResumenVentaComponent,
      });
      return await modal.present();
    }else {
      alert('Debe registrar un valor para pago.')
    }
  }
  obtener_codigo_barras() {
    this.barcodeScanner.scan({orientation : "landscape",showTorchButton : true}).then(barcodeData => {
      this.mrn.consultar_referencia(barcodeData.text)
    }).catch(err => {
      console.log('Error', err);
    });
  }


}

