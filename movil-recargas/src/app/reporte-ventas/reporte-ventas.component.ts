import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";
import {ApiService} from "../providers/api";
import {ModalController, PopoverController} from "@ionic/angular";
import Chart from "chart.js/auto";
import * as moment from "moment";

@Component({
  selector: 'app-reporte-ventas',
  templateUrl: './reporte-ventas.component.html',
  styleUrls: ['./reporte-ventas.component.scss'],
})
export class ReporteVentasComponent implements OnInit {
  @ViewChild('ventaFechaCanvas',{static: true}) private ventaFechaCanvas: ElementRef;
  ventaFechaChart: any;
  labels = []
  datos = []
  colores = []
  convencion = []
  fecha_inicial_consulta: any;
  fecha_final_consulta: any;
  fechai: any;
  fechaf:any;
  constructor(public mrn:Mrn,private router:Router,public api:ApiService, public modalController: ModalController,
              public popoverController: PopoverController) {
  }
  ngOnInit() {
    this.fechai = null;
    this.fechaf = null;
  }
  ngOnDestroy() {
    this.mrn.ventas_by_fecha = [];
    this.mrn.total_consulta_ventas = 0
  }
  generarNumero(numero){
    return (Math.random()*numero).toFixed(0);
  }
  colorRGB(){
    var coolor = "("+this.generarNumero(255)+"," + this.generarNumero(255) + "," + this.generarNumero(255) +",0.7)";
    return "rgb" + coolor;
  }
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  formatDate(value: string) {
    return moment(value).format('YYYY-MM-DD');
  }

  getIcon(resultado: any) {
    if(resultado == '00' || resultado == '001'){
      return ['checkmark-circle','#0E9434']
    }else {
      return ['close-circle','#C71A1A']
    }
  }
}
