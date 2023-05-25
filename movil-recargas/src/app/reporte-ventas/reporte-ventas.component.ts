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
  /*VentaChart(){
    if (this.ventaFechaChart) {
      this.ventaFechaChart.destroy();
    }
    this.labels = []
    this.datos = []
    this.colores = []
    for(let venta of  this.mrn.ventas_by_fecha){
      for(let empresa of  venta.items){
        this.datos.push(empresa.info.valor)
        this.labels.push(empresa.label)
        this.colores.push(this.colorRGB())
      }
    }
    this.ventaFechaChart = new Chart(this.ventaFechaCanvas.nativeElement, {
      type: 'pie',
      data : {
        labels: this.labels,
        datasets: [{
          label: '',
          data: this.datos,
          backgroundColor: this.colores,
          borderColor: ['rgb(255,255,255)',],
          borderWidth: 1
        }]
      }
    });
  }*/

  formatDate(value: string) {
    return moment(value).format('YYYY-MM-DD');
  }
  consultar() {
    //this.popoverController.dismiss()
    this.mrn.get_ventas_by_fecha(this.fechai,this.fechaf)
  }
}
