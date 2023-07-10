import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../providers/api";
import {Mrn} from "../providers/mrn";
import {AlertController, LoadingController, Platform} from "@ionic/angular";
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router,public api:ApiService,private fb:FormBuilder,private storage: Storage,
              public mrn:Mrn,public alertController: AlertController,public loadingController: LoadingController,
              private platform: Platform) {
    this.platform.keyboardDidShow.subscribe(ev => {
      const { keyboardHeight } = ev;
      if(ev['keyboardHeight']){
        this.mrn.teclado_show = false;
      }
      // Do something with the keyboard height such as translating an input above the keyboard.
    });

    this.platform.keyboardDidHide.subscribe(() => {
    });
  }
  async ngOnInit() {

    this.mrn.loginForm.reset();
    await this.storage.create();
    this.storage.get('usuario').then((val) => {
      if(val!= undefined){
        this.mrn.login_actions(JSON.parse(val))
      }else {
        this.router.navigate(['login']);
      }
    })
  }

  login(){
    if(this.mrn.loginForm.valid){
      this.mrn.loginForm.patchValue({
        username: this.mrn.loginForm.value['username'].toLowerCase(),
        password: this.mrn.loginForm.value['password'].toLowerCase(),
      })
      this.mrn.presentLoading()
      this.mrn.bad_login =  ''
      this.mrn.loadingText = 'Verificando usuario'
      this.api.login('api-token-auth', this.mrn.loginForm.value)
        .subscribe(
          data => {
            if (data!= undefined) {
              this.mrn.login_actions(data)
            }else {
              this.mrn.mensajes('El usuario o la contraseña son incorrectos.')
            }
            this.loadingController.dismiss()
          }
        )
    }
  }



  async notLogged(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'MRN Colombia',
      message: 'Sus credenciales de acceso son incorrectas.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.api.usuario = '';
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }

}
