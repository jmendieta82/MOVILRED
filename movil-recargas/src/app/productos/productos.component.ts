import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {


  constructor(public modalController: ModalController,public mrn:Mrn,private router:Router) { }

  ngOnInit() {
  }
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  seleccionarProducto(producto: any) {
    this.mrn.productoCodificadoSeleccionado = producto;
    switch(this.mrn.categoriaSeleccionada.nom_categoria) {
      case 'Pines': {
        this.mrn.formVentasPines.patchValue({
          valor:producto.producto.valor_producto
        })
        break;
      }
      case 'Recargas y Paquetes': {
        if(this.mrn.empresaSeleccionada.nom_empresa == 'Directv'){
          this.mrn.formVentasRecargasDirectv.patchValue({
            valor:producto.producto.valor_producto
          })
        }else{
          this.mrn.formVentasRecargas.patchValue({
            valor:producto.producto.valor_producto
          })
        }

        break;
      }
      case 'Certificados': {
        this.mrn.formVentasCertificados.patchValue({
          oficina:producto.codigo_producto
        })
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
      default: {
        break;
      }
    }
    this.dismissModal()

  }

  buscar(valorBusqueda) {
    if(valorBusqueda){
      let lista1 = this.mrn.productosByProveedorSinTiempoAlAire.filter(item=>item.producto.nom_producto.toUpperCase().includes(valorBusqueda.toUpperCase()))
      let lista2 = this.mrn.productosByProveedorSinTiempoAlAire.filter(item=>item.producto.valor_producto.toString().includes(valorBusqueda))
      this.mrn.listaFiltradaProductos =  lista1.concat(lista2)
    }else {
      this.mrn.listaFiltradaProductos =  this.mrn.productosByProveedorSinTiempoAlAire
    }
  }
}
