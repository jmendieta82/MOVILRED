import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {AlertController, ModalController} from "@ionic/angular";
import {ProductosComponent} from "../productos/productos.component";
import {ResumenVentaComponent} from "../resumen-venta/resumen-venta.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-venta-recargas',
  templateUrl: './venta-recargas.page.html',
  styleUrls: ['./venta-recargas.page.scss'],
})
export class VentaRecargasPage implements OnInit {
  valorVenta;
  segmento='tiempo_al_aire';
  constructor(public mrn:Mrn,public modalController: ModalController,public alertController: AlertController,private router:Router) {
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
    if(this.mrn.empresaSeleccionada.nom_empresa == 'Directv'){
      this.mrn.formVentasRecargasDirectv.patchValue({
        valor:valor
      })
    }else{
      this.mrn.formVentasRecargas.patchValue({
        valor:valor
      })
    }

  }
  valorPersonalizado() {
    this.mrn.productoCodificadoSeleccionado = '';
  }
  async present_resumen_ventas(recarga) {
    this.mrn.obj_venta = '';
    this.mrn.obj_venta = recarga
    const modal = await this.modalController.create({
      component: ResumenVentaComponent,
    });
    return await modal.present();
  }
  segmentChanged(ev: any) {
    this.segmento = ev.detail.value
  }

  limpiarFormTAire() {
    this.mrn.productoCodificadoSeleccionado =''
    this.mrn.formVentasRecargas.patchValue({
      valor:0
    })
  }
  limpiarFormPaquetes() {
    this.mrn.productoCodificadoSeleccionado =''
    this.presentModal();
    this.mrn.formVentasRecargas.patchValue({
      valor:0
    })
  }

  inseratar_num_tarjeta(value: string | number) {
    this.mrn.formVentasRecargasDirectv.patchValue({
      telefono:value
    })
  }

  async verificar_celular(value: number) {
    if(value.toString().length > 10){
      const alert = await this.alertController.create({
        header: 'MRN Colombia',
        message: 'El numero de celular es incorrecto',
        buttons: ['Entendido']
      });

      await alert.present();
      this.mrn.formVentasRecargas.patchValue({
        telefono:''
      })
    }
  }


}
