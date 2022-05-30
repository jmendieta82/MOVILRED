import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs/';
import { catchError, map } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";
import {Storage} from "@ionic/storage-angular";

@Injectable()
export class ApiService {

  load = false;
  //readonly baseURL = 'http://127.0.0.1:8000';
  readonly baseURL = 'https://recargascloud.com';

  headersLogin = new HttpHeaders().set('Content-Type','application/json');//headers de conexion
  optionsLogin = { headers: this.headersLogin };
  headersAll;
  optionsAll;
  public usuario;
  public nodoActual = '';

  constructor(private http: HttpClient,private router:Router,public alertController: AlertController,private storage: Storage,) {}

  login(finisher:string,data){
    let url = `${this.baseURL+'/'+finisher}`;
    let credencials = JSON.stringify(data);
    return this.http.post(url,credencials,this.optionsLogin).pipe(catchError(this.handleError<any>()))
  }
  //GET
  get(finisher:string): Observable<any[]>{
    this.load = true;
    let url = `${this.baseURL+'/'+finisher}`;
    return this.http.get(url,this.optionsAll).pipe(catchError(this.handleError<any>()))
  }
  //POST
  add(finisher:string,data:any){
    this.load = true;
    let dJson = JSON.stringify(data);
    let url = `${this.baseURL+'/'+finisher+'/'}`;
    return this.http.post(url,dJson,this.optionsAll).pipe(catchError(this.handleError<any>()))
  }
  post_soap(finisher:string, data:any){
    this.load = true;
    let url = `${this.baseURL+'/'+finisher}`;
    return this.http.post(url,data,this.optionsAll).pipe(catchError(this.handleError<any>()))
  }
  // GET BY ID
  getBy(finisher:string,id:number): Observable<any[]>{
    this.load = true;
    let url = `${this.baseURL+'/'+finisher+'/'+id+'/'}`;
    return this.http.get(url,this.optionsAll).pipe(catchError(this.handleError<any>()))
  }
  //PUT
  update(finisher:string,id:number,data:any){
    this.load = true;
    let dJson = JSON.stringify(data);
    let url = `${this.baseURL+'/'+finisher+'/'+id+'/'}`;
    return this.http.patch(url,dJson,this.optionsAll).pipe(catchError(this.handleError<any>()))
  }
  //DELETE
  delete(finisher:string,id:number){
    this.load = true;
    let url = `${this.baseURL+'/'+finisher+'/'+id+'/'}`;
    return this.http.delete(url,this.optionsAll).pipe(catchError(this.handleError<any>()))
  }

  async logOut(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'MRN Colombia',
      message: 'Desea salir de la aplicación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
          }
        }, {
          text: 'Aceptar',
          id: 'confirm-button',
          handler: () => {
            this.usuario = '';
            this.router.navigate(['/login']);
            this.storage.remove('usuario');
          }
        }
      ]
    });
    await alert.present();
  }

  public getIPAddress()
  {
    return this.http.get("https://geolocation-db.com/json/");
  }


  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
