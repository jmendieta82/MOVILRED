import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import {AngularFireAuth} from "@angular/fire/auth";
import {Mrn} from "./mrn";
import {ApiService} from "./api";
import {HttpHeaders} from "@angular/common/http";
import {ConfirmationService} from "primeng/api";

@Injectable()
export class AuthService {

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router,
        private route:Router,public mrn:Mrn,public api:ApiService,
        private confirmationService: ConfirmationService) {}

    login(email: string, password: string) {
        this.afAuth.signInWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Nice, it worked!');
                this.router.navigateByUrl('/profile');
            })
            .catch(err => {
                console.log('Something went wrong: ', err.message);
            });
    }

    emailSignup(email: string, password: string) {
        this.afAuth.createUserWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Sucess', value);
                this.router.navigateByUrl('/profile');
            })
            .catch(error => {
                console.log('Something went wrong: ', error);
            });
    }

    googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider)
            .then(value => {
                this.api.get('verificar_correo/?email='+value.additionalUserInfo.profile['email']).subscribe(
                    data=>{
                       if(data.length){
                           let obj = new Object()
                           obj['username'] = data[0]['username']
                           obj['password'] = data[0]['password']
                           this.api.usuario = data[0];
                           this.api.nodoActual = data[0]['nodo'];
                           this.api.headersAll = new HttpHeaders().set('Content-Type','application/json').set('Authorization','Token '+data[0].token);
                           this.api.optionsAll = { headers: this.api.headersAll};
                           this.mrn.loading = false;
                           this.mrn.getMisBolsasDinero();
                           if(!this.api.nodoActual['mora']){
                               if(this.api.nodoActual['tipo']=='Distribuidor'){
                                   this.route.navigate(['/saldos'])
                               }
                               if(this.api.nodoActual['tipo']=='Comercio'){
                                   this.route.navigate(['/ventas'])
                               }
                           }else {
                               this.route.navigate(['/pagos'])
                           }
                       }
                       else {
                           this.confirmationService.confirm({
                               message: 'El usuario no existe, por favor comuniquese con su distribuidor.',
                               accept: () => {
                                   this.route.navigate(['/login'])
                                   this.mrn.loading = false;
                               }
                           });
                       }
                    }
                )

            })
            .catch(error => {
                console.log('Something went wrong: ', error);
            });
    }

    logout() {
        this.afAuth.signOut().then(() => {
            this.router.navigate(['/']);
        });
    }

    private oAuthLogin(provider) {
        return this.afAuth.signInWithPopup(provider);
    }
}
