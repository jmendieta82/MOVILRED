import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";
import {ApiService} from "../providers/api";

@Component({
  selector: 'app-resultado-venta-recarga',
  templateUrl: './resultado-venta-recarga.component.html',
  styleUrls: ['./resultado-venta-recarga.component.scss'],
})
export class ResultadoVentaRecargaComponent implements OnInit {

  constructor(public modalController: ModalController,public mrn:Mrn,private router:Router,public api:ApiService) { }

  ngOnInit() {}
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
    this.router.navigate(['/inicio'])
  }
getColorIcon(codigo){
    if(this.mrn.trans_resultado_venta.codigo_resultado =='00' || this.mrn.trans_resultado_venta.codigo_resultado =='001'){
      return ['darkgreen','checkmark-circle']
    }else {
      return ['darkred','close-circle']
    }
}
}
