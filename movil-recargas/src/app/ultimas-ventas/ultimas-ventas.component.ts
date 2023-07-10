import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ultimas-ventas',
  templateUrl: './ultimas-ventas.component.html',
  styleUrls: ['./ultimas-ventas.component.scss'],
})
export class UltimasVentasComponent implements OnInit {

  constructor(public modalController: ModalController,public mrn:Mrn,private router:Router) { }

  ngOnInit() {
  }
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  buscar(valorBusqueda) {
    if(valorBusqueda){
      this.mrn.listaFiltradaVentas =  this.mrn.ventas_by_nodo.filter(item=>item.numeroDestino.includes(valorBusqueda.toUpperCase()))
    }else {
      this.mrn.listaFiltradaVentas =  this.mrn.ventas_by_nodo
    }
  }

}
