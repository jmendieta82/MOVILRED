import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {ModalController} from "@ionic/angular";
import {ProductosComponent} from "../productos/productos.component";

@Component({
  selector: 'app-venta-pines',
  templateUrl: './venta-pines.page.html',
  styleUrls: ['./venta-pines.page.scss'],
})
export class VentaPinesPage implements OnInit {

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
