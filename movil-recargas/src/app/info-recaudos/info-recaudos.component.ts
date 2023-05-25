import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";

@Component({
  selector: 'app-info-recaudos',
  templateUrl: './info-recaudos.component.html',
  styleUrls: ['./info-recaudos.component.scss'],
})
export class InfoRecaudosComponent implements OnInit {

  constructor(public modalController: ModalController,private router:Router) { }

  ngOnInit() {}
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
    this.router.navigate(['venta-recaudo']);
  }
}
