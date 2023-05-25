import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Mrn} from "../providers/mrn";
import {ApiService} from "../providers/api";
import {ModalController} from "@ionic/angular";
import {ProductosComponent} from "../productos/productos.component";
import {SolicitudSaldoComponent} from "../solicitud-saldo/solicitud-saldo.component";

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.page.html',
  styleUrls: ['./saldo.page.scss'],
})
export class SaldoPage implements OnInit {

  segmento='solicitud';

  constructor(public router:Router,private activatedRoute: ActivatedRoute,
              public mrn:Mrn,public api:ApiService,public modalController: ModalController,) { }

  ngOnInit() {
    this.mrn.getMiCredito()
    //this.mrn.getMisSolicitudesSaldo();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: SolicitudSaldoComponent,
    });
    return await modal.present();
  }
  actualizarSolicitudes(event: any) {
    this.mrn.getMiCredito()
    //this.mrn.getMisSolicitudesSaldo();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  segmentChanged(ev: any) {
    this.segmento = ev.detail.value
  }
}
