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
    this.mrn.getFacturasMora(this.api.nodoActual,false)
  }

  seleccionarCategoria(categoria) {
    this.mrn.categoriaSeleccionada = categoria;
    this.mrn.productoCodificadoSeleccionado = ''
    //this.router.navigate(['empresas']);
    this.mrn.empresaSeleccionada = ''
    console.log( this.mrn.categoriaSeleccionada)
  }

  async presentModalUltimasVentas() {
    const modal = await this.modalController.create({
      component: UltimasVentasComponent,
    });
    return await modal.present();
  }

  seleccionarEmpresa(empresa: any) {
    console.log(empresa)
    this.mrn.empresaSeleccionada = empresa;
    //this.mrn.proveedorSeleccionado = empresa['info'].proveedorEmpresa.proveedor;
    this.mrn.getProductosProveedor(empresa.proveedor_id,empresa.empresa_id)
    this.mrn.getMisBolsasDinero();
    console.log(this.mrn.empresaSeleccionada.nom_categoria)
    switch(this.mrn.empresaSeleccionada.nom_categoria) {
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



//This will print
  printStuff(){
    let obj = {'hola':'hola'}
   this.api.post_soap('enviar_sms',obj)
     .subscribe(
       data =>{
         console.log(data)
       }
     )
  }

}
