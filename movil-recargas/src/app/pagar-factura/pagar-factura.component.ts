import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagar-factura',
  templateUrl: './pagar-factura.component.html',
  styleUrls: ['./pagar-factura.component.scss'],
})
export class PagarFacturaComponent implements OnInit {

  constructor(public modalController: ModalController,public mrn:Mrn,private router:Router) { }

  ngOnInit() {
  }
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
