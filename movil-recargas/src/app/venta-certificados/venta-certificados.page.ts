import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {ProductosComponent} from "../productos/productos.component";
import {ModalController} from "@ionic/angular";
import {ResumenVentaComponent} from "../resumen-venta/resumen-venta.component";

@Component({
  selector: 'app-venta-certificados',
  templateUrl: './venta-certificados.page.html',
  styleUrls: ['./venta-certificados.page.scss'],
})
export class VentaCertificadosPage implements OnInit {

  constructor(public mrn:Mrn,public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    this.mrn.obj_venta = this.mrn.formVentasCertificados.value
    const modal = await this.modalController.create({
      component: ProductosComponent,
    });
    return await modal.present();
  }

  async present_resumen_ventas() {
    this.mrn.obj_venta = '';
    this.mrn.formVentasCertificados.patchValue(
      {valor:22000}
    )
    this.mrn.obj_venta = this.mrn.formVentasCertificados.value

    const modal = await this.modalController.create({
      component: ResumenVentaComponent,
    });
    return await modal.present();
  }
}
