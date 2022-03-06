import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Mrn} from "../providers/mrn";
import {ApiService} from "../providers/api";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public folder: string;
  constructor(private router:Router,private activatedRoute: ActivatedRoute,public mrn:Mrn,public api:ApiService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  seleccionarCategoria(categoria) {
    this.mrn.categoriaSeleccionada = categoria;
    this.mrn.productoCodificadoSeleccionado = ''
    this.router.navigate(['empresas']);
    this.mrn.empresaSeleccionada = ''
    /*this.mrn.formVentasRecargas.reset()
    this.mrn.formVentasApuestas.reset()
    this.mrn.formVentasCertificados.reset()
    this.mrn.formVentasSoat.reset()*/

  }
}
