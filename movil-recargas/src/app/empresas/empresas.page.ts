import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {Router} from "@angular/router";
import {ApiService} from "../providers/api";

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.page.html',
  styleUrls: ['./empresas.page.scss'],
})
export class EmpresasPage implements OnInit {

  constructor(public mrn:Mrn,private router:Router,public api:ApiService) { }

  ngOnInit() {
  }
  seleccionarEmpresa(empresa: any) {
    this.mrn.empresaSeleccionada = empresa['info'].proveedorEmpresa.empresa;
    this.mrn.proveedorSeleccionado = empresa['info'].proveedorEmpresa.proveedor;
    this.mrn.getProductosProveedor(empresa['info'].proveedorEmpresa.proveedor.id,this.mrn.empresaSeleccionada.id)
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
      default: {
        this.router.navigate(['venta-recargas']);
        break;
      }
    }
  }
}
