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

  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  ngOnInit() {
  }
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  guardarPago() {
    this.mrn.formPagos.patchValue({
      transaccion_id: this.mrn.transaccionSeleccionada.id,
    });
    this.mrn.abonar_factura(this.mrn.formPagos.value);
  }

}
