import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";

@Component({
  selector: 'app-soat-vigente',
  templateUrl: './soat-vigente.component.html',
  styleUrls: ['./soat-vigente.component.scss'],
})
export class SoatVigenteComponent implements OnInit {

  constructor(public modalController: ModalController,public mrn:Mrn,private router:Router) { }

  ngOnInit() {}
  dismissModal() {
    this.modalController.dismiss({'dismissed': true});
  }
}
