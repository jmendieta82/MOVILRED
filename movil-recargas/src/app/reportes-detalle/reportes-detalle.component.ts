import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Mrn} from "../providers/mrn";
import {ApiService} from "../providers/api";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-reportes-detalle',
  templateUrl: './reportes-detalle.component.html',
  styleUrls: ['./reportes-detalle.component.scss'],
})
export class ReportesDetalleComponent implements OnInit {
  @ViewChild('doughnutCanvas',{static: true}) private doughnutCanvas: ElementRef;
  @ViewChild('ventaFechaCanvas',{static: true}) private ventaFechaCanvas: ElementRef;
  doughnutChart: any;
  convencion = []
  constructor(public mrn:Mrn,public api:ApiService, public modalController: ModalController) {
  }
  ngOnInit() {}

  seleccionarCategoria($event: any) {
    if (this.doughnutChart) {
      this.doughnutChart.destroy();
    }
    let comisiones = this.mrn.lista_comisiones_venta.filter(item=>item.nom_categoria === event['detail'].value)
    this.convencion = []
    for(let comision of  comisiones){
      for(let empresa of  comision.empresas){
        if(empresa.micomision>0 && empresa.logo_empresa){
          this.convencion.push(empresa)
        }
      }
    }
  }
  generarNumero(numero){
    return (Math.random()*numero).toFixed(0);
  }
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
