import { Component, OnInit } from '@angular/core';
import { ApiService } from '../providers/api';
import {Mrn} from "../providers/mrn";
import {ProductosComponent} from "../productos/productos.component";
import {ModalController} from "@ionic/angular";
import { ConveniosComponent } from '../convenios/convenios.component';
import {ResumenVentaComponent} from "../resumen-venta/resumen-venta.component";
import {BarcodeScanner} from "@awesome-cordova-plugins/barcode-scanner/ngx";

@Component({
  selector: 'app-venta-recaudo',
  templateUrl: './venta-recaudo.page.html',
  styleUrls: ['./venta-recaudo.page.scss'],
})
export class VentaRecaudoPage implements OnInit {

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
    console.log(this.mrn.convenio_seleccionado)
    this.mrn.obj_venta = '';
    this.mrn.formVentasRecaudo.patchValue({
      convenio:this.mrn.convenio_seleccionado?this.mrn.convenio_seleccionado.nombre:this.mrn.factura_consultada.nconvenio,
      valor:this.mrn.factura_consultada.valorPago,
      })
    this.mrn.obj_venta = this.mrn.formVentasRecaudo.value
    const modal = await this.modalController.create({
      component: ResumenVentaComponent,
    });
    return await modal.present();
  }

  obtener_codigo_barras() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.mrn.formVentasRecaudo.patchValue({
        referencia : barcodeData['text']
      })
      this.mrn.consultar_referencia()
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
