import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";

@Component({
  selector: 'app-resultado-venta-recarga',
  templateUrl: './resultado-venta-recarga.component.html',
  styleUrls: ['./resultado-venta-recarga.component.scss'],
})
export class ResultadoVentaRecargaComponent implements OnInit {

  constructor(public modalController: ModalController,public mrn:Mrn,private router:Router) { }

  ngOnInit() {}
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
