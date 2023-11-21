import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";
import {ApiService} from "../providers/api";
import {ModalController, PopoverController} from "@ionic/angular";
import * as moment from "moment";
import {ProductosComponent} from "../productos/productos.component";
import {VerSoportePagoComponent} from "../ver-soporte-pago/ver-soporte-pago.component";

@Component({
  selector: 'app-reporte-pagos',
  templateUrl: './reporte-pagos.component.html',
  styleUrls: ['./reporte-pagos.component.scss'],
})
export class ReportePagosComponent implements OnInit {
  fecha_consulta: any;
  fecha_consulta2: any;

  constructor(public mrn:Mrn,private router:Router,public api:ApiService, public modalController: ModalController,
              public popoverController: PopoverController) {
  }
  ngOnInit() {
    this.mrn.misSolicitudesSaldo = [];
  }
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  formatDate(value: any) {
    return moment(value).format('YYYY-MM-DD');
  }
  consultar(fecha,fecha2) {
    this.fecha_consulta = this.formatDate(fecha);
    this.fecha_consulta2 = this.formatDate(fecha2);
    this.popoverController.dismiss()
    this.mrn.get_pagos_by_fecha(this.fecha_consulta,this.fecha_consulta2)
  }
  async presentModal(pago) {
    this.mrn.pagoSeleccionado= pago
    const modal = await this.modalController.create({
      component: VerSoportePagoComponent,
    });
    return await modal.present();
  }
}
