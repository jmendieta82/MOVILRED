import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";
import {ApiService} from "../providers/api";
import {PagarFacturaComponent} from "../pagar-factura/pagar-factura.component";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.page.html',
  styleUrls: ['./cartera.page.scss'],
})
export class CarteraPage implements OnInit {
  constructor(public mrn:Mrn,public router:Router,public api:ApiService,public modalController: ModalController) { }

  ngOnInit() {
    this.mrn.getFacturasMora(this.api.nodoActual, false)
    this.mrn.getCartera(this.api.nodoActual)
  }
  async presentModal() {
    this.mrn.formPagos.patchValue({
      abono:this.mrn.totalFacturasAPagar,
      soporte:''
    })
    const modal = await this.modalController.create({
      component: PagarFacturaComponent,
    });
    return await modal.present();
  }

  seleccionarFactura(transaccion: any) {
    if(this.mrn.facturasSeleccionadas.filter(item=>item.id == transaccion.id).length){
      this.mrn.facturasSeleccionadas.splice(this.mrn.facturasSeleccionadas.indexOf(this.mrn.facturasSeleccionadas.filter(item=>item.id == transaccion.id)[0]),1)
    }else {
      let factura = {
        'id':transaccion.id,
        'valor':transaccion.valor,
        'nodo_id':transaccion.nodo.id,
        'repr_legal':transaccion.nodo.representanteLegal,
        'nodo':transaccion.nodo
        ,'saldo_pendiente_pago':transaccion.saldo_pendiente_pago
      }
      this.mrn.facturasSeleccionadas.push(factura)
    }
    this.calcularTotal()
  }

  calcularTotal() {
    this.mrn.totalFacturasAPagar = 0
    for(let item of this.mrn.facturasSeleccionadas){
      this.mrn.totalFacturasAPagar += parseInt(item.saldo_pendiente_pago)
    }
  }

  doRefresh(event) {
    this.mrn.getCartera(this.api.nodoActual)
    this.mrn.getMisBolsasDinero();
    this.mrn.getFacturasMora(this.api.nodoActual, false)
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
