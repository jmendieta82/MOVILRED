import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Mrn} from "../providers/mrn";
import {ApiService} from "../providers/api";
import {ModalController, Platform} from "@ionic/angular";
import {UltimasVentasComponent} from "../ultimas-ventas/ultimas-ventas.component";
import {InfoRecaudosComponent} from "../info-recaudos/info-recaudos.component";
import {PrintService} from "../providers/print.service";

declare const Buffer


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public folder: string;
  segmento='ventas';
  bluetoothList:any=[];
  selectedPrinter:any;
  constructor(private router:Router,private activatedRoute: ActivatedRoute,public mrn:Mrn,public api:ApiService
  ,public modalController: ModalController,private platform: Platform,private impresionService:PrintService) {
    /*this.platform.backButton.subscribeWithPriority(9999, () => {
      this.api.logOut()
    });*/

  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.listPrinter()
  }

  seleccionarCategoria(categoria) {
    this.mrn.categoriaSeleccionada = categoria;
    this.mrn.productoCodificadoSeleccionado = ''
    //this.router.navigate(['empresas']);
    this.mrn.empresaSeleccionada = ''
  }

  async presentModalUltimasVentas() {
    const modal = await this.modalController.create({
      component: UltimasVentasComponent,
    });
    return await modal.present();
  }

  seleccionarEmpresa(empresa: any) {
    this.mrn.empresaSeleccionada = empresa['info'].proveedorEmpresa.empresa;
    this.mrn.proveedorSeleccionado = empresa['info'].proveedorEmpresa.proveedor;
    this.mrn.getProductosProveedor(empresa['info'].proveedorEmpresa.proveedor.id,this.mrn.empresaSeleccionada.id)
    this.mrn.getMisBolsasDinero();
    switch(this.mrn.empresaSeleccionada.catServicio.nombre) {
      case 'Pines': {
        this.router.navigate(['venta-pines']);
        break;
      }
      case 'Recargas y paquetes': {
        this.router.navigate(['venta-recargas']);
        break;
      }
      case 'Certificados': {

        this.router.navigate(['venta-certificados']);
        break;
      }
      case 'SOAT': {
        this.router.navigate(['venta-soat']);
        break;
      }
      case 'Apuestas': {
        this.router.navigate(['venta-apuestas']);
        break;
      }
      case 'Recaudos': {
        this.ver_recomendacion_recaudo()
        //this.router.navigate(['venta-recaudo']);
        break;
      }
      default: {
        this.router.navigate(['venta-recargas']);
        break;
      }
    }
  }

  segmentChanged(ev: any) {
    this.segmento = ev.detail.value
  }

  actualizarVentasInicio(event: any) {
    this.mrn.getComisiones(this.api.nodoActual)
    this.mrn.getMiCredito()
    this.mrn.getMisBolsasDinero();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  async ver_recomendacion_recaudo(){
      const modal = await this.modalController.create({
        component: InfoRecaudosComponent,
      });
      return await modal.present();
  }

  //This will list all of your bluetooth devices
  listPrinter() {

  }
//This will store selected bluetooth device mac address
  selectPrinter(macAddress)
  {
    //Selected printer macAddress stored here
    this.selectedPrinter=macAddress;
  }

//This will print
  printStuff(){
    this.impresionService.imprimirTexto('Hola Mundo');
  }

}
