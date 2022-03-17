import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {ModalController} from "@ionic/angular";
import {PagarFacturaComponent} from "../pagar-factura/pagar-factura.component";

@Component({
  selector: 'app-mora',
  templateUrl: './mora.page.html',
  styleUrls: ['./mora.page.scss'],
})
export class MoraPage implements OnInit {

  constructor(public mrn:Mrn,public modalController: ModalController) {
  }

  ngOnInit() {
  }
  async presentModal(transaccion) {
    this.mrn.transaccionSeleccionada = transaccion
    this.mrn.get_abonos_factura(transaccion)
    this.mrn.formPagos.patchValue({
      abono:transaccion.valor
    })
    const modal = await this.modalController.create({
      component: PagarFacturaComponent,
    });
    return await modal.present();
  }

}
