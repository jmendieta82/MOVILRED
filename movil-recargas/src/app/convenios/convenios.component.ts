import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import { ApiService } from '../providers/api';
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss'],
})
export class ConveniosComponent implements OnInit {

  constructor(public modalController: ModalController,public mrn:Mrn,public api:ApiService,private router:Router) { }

  ngOnInit() {

  }
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  filtrarConvenio(event) {
    if(!event){
      this.mrn.convenios_filtrados = []
    }else {
      this.mrn.convenios_filtrados = this.mrn.convenios.filter(item=>item.nombre.toLowerCase().includes(event.toLowerCase()))
    }
  }

  seleccionarConvenio(convenio: any) {
    this.mrn.convenio_seleccionado = convenio
    this.modalController.dismiss()
  }

}
