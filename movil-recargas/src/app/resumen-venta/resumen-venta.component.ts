import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {LoadingController, ModalController} from "@ionic/angular";
import {ProductosComponent} from "../productos/productos.component";
import {InfoFacturaPagadaComponent} from "../info-factura-pagada/info-factura-pagada.component";

@Component({
  selector: 'app-resumen-venta',
  templateUrl: './resumen-venta.component.html',
  styleUrls: ['./resumen-venta.component.scss'],
})
export class ResumenVentaComponent implements OnInit {

  constructor(public mrn:Mrn,public modalController: ModalController,public loadingController: LoadingController,) { }

  ngOnInit() {
  }

  vender(b: boolean) {
    switch(this.mrn.empresaSeleccionada.catServicio.nombre) {
      case 'Pines': {
        this.mrn.presentLoading()
        this.mrn.venderPines(b)
        break;
      }
      case 'Recargas y Paquetes': {
        this.mrn.presentLoadingVentas()
        //this.mrn.venderRecarga(b)
        this.mrn.venderRecargaVer2(b)
        break;
      }
      case 'Certificados': {
        this.mrn.presentLoadingVentas()
        this.mrn.venderCertificado(b)
        break;
      }
      case 'Apuestas': {
        this.mrn.presentLoadingVentas()
       this.mrn.venderApuestas(b)
        break;
      }
      case 'Soat': {
        this.mrn.presentLoadingVentas()
        this.mrn.venderSoat(b)
        break;
      }
      case 'Recaudos': {
        this.mrn.presentLoadingVentas()
        this.mrn.pagar_factura(b)
        break;
      }
      default: {
        break;
      }
    }
  }


}
