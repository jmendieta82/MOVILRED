import { Component, OnInit } from '@angular/core';
import {Mrn} from "../providers/mrn";
import {ApiService} from "../providers/api";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public mrn:Mrn,public api:ApiService,private alertController: AlertController) {
    this.mrn.llenarformUsuario(api.usuario)
  }

  ngOnInit() {
  }
  async guardarUsuario() {
      if(this.mrn.formUsuario.value['password2']){
        const alert = await this.alertController.create({
          header: 'Quiere cambair la contraseña al usuario '+this.mrn.formUsuario.value['username']+'?',
          buttons: [
            {
              text: 'Si',
              role: 'confirm',
              handler: () => {
                this.mrn.formUsuario.patchValue({
                  password:this.mrn.formUsuario.value['password2'].toLowerCase()
                });
                this.mrn.updatePwdUsuario(this.mrn.formUsuario.value)
              }
            },
            {
              text: 'No',
              role: 'cancel',
              handler: () => { }
            },
          ]
        });

        await alert.present();
      }else {
        this.mrn.updateUsuario(this.mrn.formUsuario.value)
      }
  }
}
