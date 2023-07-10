import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";
import {ApiService} from "../providers/api";
import {ProductosComponent} from "../productos/productos.component";
import {ModalController} from "@ionic/angular";
import {ReportesDetalleComponent} from "../reportes-detalle/reportes-detalle.component";
import {ReporteVentasComponent} from "../reporte-ventas/reporte-ventas.component";
import {ReporteSolicitudesComponent} from "../reporte-solicitudes/reporte-solicitudes.component";
import {ReportePagosComponent} from "../reporte-pagos/reporte-pagos.component";
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements AfterViewInit {
  segmento='comisiones';
  constructor(public mrn:Mrn,public router:Router,public api:ApiService,public modalController: ModalController) { }
  ngAfterViewInit() {
  }

  async presentModal(tipo_reporte) {
    this.mrn.tipo_reporte = tipo_reporte;
    const modal = await this.modalController.create({
      component: ReportesDetalleComponent,
    });
    return await modal.present();
  }
  async presentModalReporteVentas(tipo_reporte) {
    this.mrn.tipo_reporte = tipo_reporte;
    const modal = await this.modalController.create({
      component: ReporteVentasComponent,
    });
    return await modal.present();
  }
  async presentModalReporteSolicitudes(tipo_reporte) {
    this.mrn.tipo_reporte = tipo_reporte;
    const modal = await this.modalController.create({
      component: ReporteSolicitudesComponent,
    });
    return await modal.present();
  }
  async presentModalReportePagos(tipo_reporte) {
    this.mrn.tipo_reporte = tipo_reporte;
    const modal = await this.modalController.create({
      component: ReportePagosComponent,
    });
    return await modal.present();
  }
}
