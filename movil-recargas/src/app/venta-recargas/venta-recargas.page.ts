import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {ModalController} from "@ionic/angular";
import {ProductosComponent} from "../productos/productos.component";

@Component({
  selector: 'app-venta-recargas',
  templateUrl: './venta-recargas.page.html',
  styleUrls: ['./venta-recargas.page.scss'],
})
export class VentaRecargasPage implements OnInit {
  valorVenta;
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
    if(valor != this.mrn.formVentasRecargas.value['valor']){
      this.valorVenta = valor
      this.mrn.formVentasRecargas.patchValue({
        valor:valor
      })
    }else {
      this.valorVenta = 0
      this.mrn.formVentasRecargas.patchValue({
        valor:0
      })
    }
  }

}
