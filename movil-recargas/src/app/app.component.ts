import { Component } from '@angular/core';
import {Mrn} from "./providers/mrn";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Ventas', url: '/inicio', icon: 'fas fa-store' },
    { title: 'Solicitudes de Saldo', url: '/saldo', icon: 'fas fa-hand-holding-usd' },
    { title: 'Salir', url: '/folder/Outbox', icon: 'fas fa-hand-holding-usd' },
  ];
  constructor(public mrn:Mrn) {
    this.mrn.crearControles();
  }
}
