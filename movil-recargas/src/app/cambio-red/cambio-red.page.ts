import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage-angular";
import {Mrn} from "../providers/mrn";
import {ApiService} from "../providers/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cambio-red',
  templateUrl: './cambio-red.page.html',
  styleUrls: ['./cambio-red.page.scss'],
})
export class CambioRedPage implements OnInit {

  constructor(private storage: Storage, public mrn: Mrn, public api: ApiService, private router: Router,) {
  }

  ngOnInit() {
  }

  aceptar_cambio_red() {
    if (this.api.usuario) {
      this.mrn.login_actions(this.api.usuario)
    } else {
      this.router.navigate(['login']);
    }
  }
}
