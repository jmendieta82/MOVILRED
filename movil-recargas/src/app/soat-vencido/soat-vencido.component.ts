import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";

@Component({
  selector: 'app-soat-vencido',
  templateUrl: './soat-vencido.component.html',
  styleUrls: ['./soat-vencido.component.scss'],
})
export class SoatVencidoComponent implements OnInit {
  constructor(public modalController: ModalController,public mrn:Mrn,private router:Router) { }

  ngOnInit() {}
  dismissModal() {
    this.modalController.dismiss({'dismissed': true});
  }

}
