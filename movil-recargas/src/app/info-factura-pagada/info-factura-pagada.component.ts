import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api";
import {Mrn} from "../providers/mrn";
import {ModalController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-info-factura-pagada',
  templateUrl: './info-factura-pagada.component.html',
  styleUrls: ['./info-factura-pagada.component.scss'],
})
export class InfoFacturaPagadaComponent implements OnInit {

  constructor(public api:ApiService,public mrn:Mrn,public modalController: ModalController,private router:Router) { }

  ngOnInit() {}
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
    this.mrn.factura_pagada = ''
    this.mrn.factura_consultada = ''
    this.router.navigate(['/inicio'])
  }
}
