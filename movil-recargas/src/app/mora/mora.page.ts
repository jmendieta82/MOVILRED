import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {ModalController} from "@ionic/angular";
import {PagarFacturaComponent} from "../pagar-factura/pagar-factura.component";
import {ApiService} from "../providers/api";

@Component({
  selector: 'app-mora',
  templateUrl: './mora.page.html',
  styleUrls: ['./mora.page.scss'],
})
export class MoraPage implements OnInit {

  constructor(public api: ApiService,public mrn:Mrn,public modalController: ModalController) {
  }

  ngOnInit() {
  }
  /*async presentModal(transaccion) {
    this.mrn.transaccionSeleccionada = transaccion
    this.mrn.get_abonos_factura(transaccion)
    this.mrn.formPagos.patchValue({
      abono:transaccion.valor
    })
    const modal = await this.modalController.create({
      component: PagarFacturaComponent,
    });
    return await modal.present();
  }*/

  async presentModal() {
    this.mrn.formPagos.patchValue({
      abono:this.mrn.totalFacturasAPagar,
      soporte:'https://s1.significados.com/foto/earth-11015-1920.jpg'
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
    setTimeout(() => {
      this.mrn.getFacturasMora(this.api.nodoActual, false)
      event.target.complete();
    }, 2000);
  }

}
