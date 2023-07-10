import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";
import {ApiService} from "../providers/api";
import {ModalController, PopoverController} from "@ionic/angular";
import * as moment from "moment";

@Component({
  selector: 'app-reporte-solicitudes',
  templateUrl: './reporte-solicitudes.component.html',
  styleUrls: ['./reporte-solicitudes.component.scss'],
})
export class ReporteSolicitudesComponent implements OnInit {

  fecha_consulta: any;
  fechai: any;
  fechaf:any;

  constructor(public mrn:Mrn,private router:Router,public api:ApiService, public modalController: ModalController,public popoverController: PopoverController) {
  }
  ngOnInit() {
    this.mrn.misSolicitudesSaldo = [];
  }
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  formatDate(value: string) {
    return moment(value).format('YYYY-MM-DD');
  }
}
