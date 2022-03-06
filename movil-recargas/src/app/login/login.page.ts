import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../providers/api";
import {Mrn} from "../providers/mrn";
import {AlertController} from "@ionic/angular";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router,public api:ApiService,private fb:FormBuilder,public mrn:Mrn,public alertController: AlertController) { }
  loginForm:FormGroup;
  ngOnInit() {
    this.loginForm = this.fb.group({
      id : [''],
      username : ['carmencastro',Validators.required],
      password : ['900123456',Validators.required],
      email : [''],
      //recaptcha: ['']
      //recaptcha: ['', Validators.required]
    });
    /* this.loginForm = this.fb.group({
       id : [''],
       username : ['jamen17',Validators.required],
       password : ['1nclus10nP4st0.',Validators.required],
       email : [''],
       //recaptcha: ['']
       //recaptcha: ['', Validators.required]
     });*/
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
            if (data) {
              this.api.usuario = data;
              this.api.nodoActual = data['nodo'];
              this.api.headersAll = new HttpHeaders().set('Content-Type','application/json')
                .set('Authorization','Token '+data['token']);
              this.api.optionsAll = { headers: this.api.headersAll};
              this.mrn.loading = false;
              this.api.usuario['puntoAcceso'] = this.mrn.tokenMessage
              this.mrn.registrarPuntoDeAcceso(this.api.usuario)
              if (!this.api.nodoActual['mora']) {
                this.mrn.getMisBolsasDinero();
                this.mrn.activeState = [true, true];
                this.mrn.getCatServicio();
                this.mrn.getMiCredito()
                this.mrn.getMisSolicitudesSaldo();
                this.mrn.getLastVentasByNodo()
                this.mrn.getComisiones(this.api.nodoActual)
                this.router.navigate(['inicio']);
              } else {
                this.mrn.getNodoPadre()
                this.mrn.getFacturasMora(this.api.nodoActual,false)
                this.router.navigate(['mora']);//redireccionar a pagos
              }
            }else {
              this.mrn.bad_login = 'El usuario o la contraseña son incorrectos.'
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
