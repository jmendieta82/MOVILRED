import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {ModalController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ver-soporte-pago',
  templateUrl: './ver-soporte-pago.component.html',
  styleUrls: ['./ver-soporte-pago.component.scss'],
})
export class VerSoportePagoComponent implements OnInit {

  constructor(public modalController: ModalController,public mrn:Mrn,private router:Router) { }

  ngOnInit() {}
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
