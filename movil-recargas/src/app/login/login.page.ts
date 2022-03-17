import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../providers/api";
import {Mrn} from "../providers/mrn";
import {AlertController, Platform} from "@ionic/angular";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router,public api:ApiService,private fb:FormBuilder,
              public mrn:Mrn,public alertController: AlertController,
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
  ngOnInit() {
    this.loginForm = this.fb.group({
      id : [''],
      username : ['',Validators.required],
      password : ['',Validators.required],
      email : [''],
    });
  }

  login(){
    if(this.loginForm.valid){
      this.loginForm.patchValue({
        username: this.loginForm.value['username'].toLowerCase(),
        password: this.loginForm.value['password'].toLowerCase(),
      })
      this.mrn.loading = true;
      this.mrn.bad_login =  ''
      this.mrn.loadingText = 'Verificando usuario'
      this.api.login('api-token-auth', this.loginForm.value)
        .subscribe(
          data => {
            if (data!= undefined) {
              this.mrn.teclado_show = true;
              this.api.usuario = data;
              this.api.nodoActual = data['nodo'];
              this.api.headersAll = new HttpHeaders().set('Content-Type','application/json')
                .set('Authorization','Token '+data['token']);
              this.api.optionsAll = { headers: this.api.headersAll};
              this.mrn.loading = false;
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
            }else {
              this.mrn.mensajes('El usuario o la contraseña son incorrectos.')
            }
          }
        )
    }
  }

  async notLogged(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Educación inclusiva',
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
