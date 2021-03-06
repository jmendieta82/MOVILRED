import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../providers/api";
import {Mrn} from "../providers/mrn";
import {AlertController, LoadingController, Platform} from "@ionic/angular";
import {HttpHeaders} from "@angular/common/http";
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
  loginForm:FormGroup;
  async ngOnInit() {
    this.loginForm = this.fb.group({
      id : [''],
      username : ['',Validators.required],
      password : ['',Validators.required],
      loggedIn : [''],
    });
    this.loginForm.reset();
    await this.storage.create();
    this.storage.get('usuario').then((val) => {
      if(val!= undefined){
        this.login_actions(JSON.parse(val))
      }else {
        this.router.navigate(['login']);
      }
    })
  }

  login(){
    if(this.loginForm.valid){
      this.loginForm.patchValue({
        username: this.loginForm.value['username'].toLowerCase(),
        password: this.loginForm.value['password'].toLowerCase(),
      })
      this.mrn.presentLoading()
      this.mrn.bad_login =  ''
      this.mrn.loadingText = 'Verificando usuario'
      this.api.login('api-token-auth', this.loginForm.value)
        .subscribe(
          data => {
            if (data!= undefined) {
             this.login_actions(data)
            }else {
              this.mrn.mensajes('El usuario o la contrase??a son incorrectos.')
            }
            this.loadingController.dismiss()
          }
        )
    }
  }

  login_actions(usuario){
    this.mrn.teclado_show = true;
    this.api.usuario = usuario;
    if(this.loginForm.value['loggedIn']){
      this.storage.set('usuario', JSON.stringify(usuario));
    }
    this.api.nodoActual = usuario['nodo'];
    this.api.headersAll = new HttpHeaders().set('Content-Type','application/json')
      .set('Authorization','Token '+usuario['token']);
    this.api.optionsAll = { headers: this.api.headersAll};
    this.api.usuario['puntoAcceso'] = this.mrn.tokenMessage
    this.mrn.registrarPuntoDeAcceso(this.api.usuario)
    if (!this.api.nodoActual['mora']) {
      if(this.api.nodoActual['tipo']=='Comercio'){
        this.mrn.getMisBolsasDinero();
        this.mrn.activeState = [true, true];
        this.mrn.getCatServicio();
        this.mrn.getMiCredito()
        this.mrn.getMisSolicitudesSaldo();
        this.mrn.getLastVentasByNodo()
        this.mrn.getComisiones(this.api.nodoActual)
        this.router.navigate(['inicio']);
      }else {
        this.mrn.mensajes('El usuario que esta intentando ingresar es de tipo distribuidor, ' +
          'en MRN Colombia tenemos otra aplicacion especializada para usted.')
      }
    } else {
      this.mrn.getNodoPadre()
      this.mrn.getFacturasMora(this.api.nodoActual,false)
      this.router.navigate(['mora']);//redireccionar a pagos
    }
  }

  async notLogged(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Educaci??n inclusiva',
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
