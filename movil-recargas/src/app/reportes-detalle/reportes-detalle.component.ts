import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";
import {ApiService} from "../providers/api";
import Chart from 'chart.js/auto'
import {ModalController} from "@ionic/angular";
import * as moment from 'moment';

@Component({
  selector: 'app-reportes-detalle',
  templateUrl: './reportes-detalle.component.html',
  styleUrls: ['./reportes-detalle.component.scss'],
})
export class ReportesDetalleComponent implements OnInit {
  @ViewChild('doughnutCanvas',{static: true}) private doughnutCanvas: ElementRef;
  @ViewChild('ventaFechaCanvas',{static: true}) private ventaFechaCanvas: ElementRef;
  doughnutChart: any;
  ventaFechaChart: any;
  labels = []
  datos = []
  colores = []
  convencion = []
  fecha_consulta: any;
  constructor(public mrn:Mrn,private router:Router,public api:ApiService, public modalController: ModalController) {
  }
  ngOnInit() {}

  seleccionarCategoria($event: any) {
    if (this.doughnutChart) {
      this.doughnutChart.destroy();
    }
    let comisiones = this.mrn.lista_comisiones_venta.filter(item=>item['data'].proveedorEmpresa.empresa.catServicio.id == event['detail'].value)
    this.labels = []
    this.datos = []
    this.colores = []
    this.convencion = []
    for(let comision of  comisiones){
      for(let empresa of  comision.items){
        if(empresa.info.micomision>0){
          this.convencion.push(empresa.info)
          this.datos.push((this.api.nodoActual['tipoComision']=='CV')?empresa.info.micomision:this.api.nodoActual['comisionAnticipada'])
          this.labels.push(empresa.label)
          this.colores.push(this.colorRGB())
        }
      }
    }
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
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
  VentaChart(){
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
  }
  formatDate(value: string) {
    return moment(value).format('DD-MM-YYYY');
  }
}
