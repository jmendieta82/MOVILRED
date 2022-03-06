import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {ModalController} from "@ionic/angular";
import {ProductosComponent} from "../productos/productos.component";

@Component({
  selector: 'app-venta-soat',
  templateUrl: './venta-soat.page.html',
  styleUrls: ['./venta-soat.page.scss'],
})
export class VentaSoatPage implements OnInit {

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
