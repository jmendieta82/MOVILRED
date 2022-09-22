import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {ModalController} from "@ionic/angular";
import {ProductosComponent} from "../productos/productos.component";
import {ResumenVentaComponent} from "../resumen-venta/resumen-venta.component";

@Component({
  selector: 'app-venta-soat',
  templateUrl: './venta-soat.page.html',
  styleUrls: ['./venta-soat.page.scss'],
})
export class VentaSoatPage implements OnInit {

  constructor(public mrn:Mrn,public modalController: ModalController) { }

  ngOnInit() {
    this.mrn.getMunicipios()
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ProductosComponent,
    });
    return await modal.present();
  }
  seleccionarMunicipio($event: any) {
    let ciudad = $event.detail.value
    let codigo_municipio = this.mrn.municipiosFiltrados.filter(item=>item.codigo_municipio == ciudad)[0]['codigo_municipio']
    let codigo_departamento = this.mrn.municipiosFiltrados.filter(item=>item.codigo_municipio == ciudad)[0]['codigo_departamento']
    this.mrn.formVentasSoat.patchValue({
      municipio:this.mrn.formVentasSoat.value['municipio']?this.mrn.formVentasSoat.value['municipio']:codigo_municipio,
      departamento:this.mrn.formVentasSoat.value['departamento']?this.mrn.formVentasSoat.value['departamento']:codigo_departamento
    })

  }

  async present_resumen_ventas() {
    this.mrn.obj_venta = '';
    this.mrn.obj_venta = this.mrn.formVentasSoat.value
    const modal = await this.modalController.create({
      component: ResumenVentaComponent,
    });
    return await modal.present();
  }
}
