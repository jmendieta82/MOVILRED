import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Mrn} from "../providers/mrn";
import {ApiService} from "../providers/api";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-reporte-ventas',
  templateUrl: './reporte-ventas.component.html',
  styleUrls: ['./reporte-ventas.component.scss'],
})
export class ReporteVentasComponent implements OnInit {
  @ViewChild('ventaFechaCanvas',{static: true}) private ventaFechaCanvas: ElementRef;
  fechai: any;
  fechaf:any;
  constructor(public mrn:Mrn,public api:ApiService, public modalController: ModalController) {
  }
  ngOnInit() {
    this.fechai = null;
    this.fechaf = null;
  }
  ngOnDestroy() {
    this.mrn.ventas_by_fecha = [];
    this.mrn.total_consulta_ventas = 0
  }
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  getIcon(resultado: any) {
    if(resultado == '00' || resultado == '001'){
      return ['checkmark-circle','#0E9434']
    }else {
      return ['close-circle','#C71A1A']
    }
  }
}
