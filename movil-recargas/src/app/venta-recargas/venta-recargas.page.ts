import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {ModalController} from "@ionic/angular";
import {ProductosComponent} from "../productos/productos.component";
import {ResumenVentaComponent} from "../resumen-venta/resumen-venta.component";

@Component({
  selector: 'app-venta-recargas',
  templateUrl: './venta-recargas.page.html',
  styleUrls: ['./venta-recargas.page.scss'],
})
export class VentaRecargasPage implements OnInit {
  valorVenta;
  segmento='tiempo_al_aire';
  constructor(public mrn:Mrn,public modalController: ModalController) {
  }

  ngOnInit() {
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: ProductosComponent,
    });
    return await modal.present();
  }

  cambiarValor(valor: any) {
    this.mrn.productoCodificadoSeleccionado = ''
    this.mrn.formVentasRecargas.patchValue({
      valor:valor
    })
  }
  valorPersonalizado() {
    this.mrn.productoCodificadoSeleccionado = '';
  }
  async present_resumen_ventas() {
    this.mrn.obj_venta = '';
    this.mrn.obj_venta = this.mrn.formVentasRecargas.value
    const modal = await this.modalController.create({
      component: ResumenVentaComponent,
    });
    return await modal.present();
  }
  segmentChanged(ev: any) {
    this.segmento = ev.detail.value
  }
}
