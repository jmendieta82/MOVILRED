import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {ModalController} from "@ionic/angular";
import {ProductosComponent} from "../productos/productos.component";

@Component({
  selector: 'app-venta-apuestas',
  templateUrl: './venta-apuestas.page.html',
  styleUrls: ['./venta-apuestas.page.scss'],
})
export class VentaApuestasPage implements OnInit {

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

}
