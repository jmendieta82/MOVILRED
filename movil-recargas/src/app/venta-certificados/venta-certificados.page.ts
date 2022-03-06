import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {ProductosComponent} from "../productos/productos.component";
import {ModalController} from "@ionic/angular";

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
    const modal = await this.modalController.create({
      component: ProductosComponent,
    });
    return await modal.present();
  }

}
