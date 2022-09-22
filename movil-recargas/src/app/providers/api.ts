import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs/';
import { catchError, map } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";
import {Storage} from "@ionic/storage-angular";
import { Device } from '@awesome-cordova-plugins/device/ngx';
import {Network} from "@ionic-native/network/ngx";
import {NetworkService} from "./network";
@Injectable()
export class ApiService {

  load = false;
  //readonly baseURL = 'http://127.0.0.1:8000';
  readonly conceptoURL = 'https://150.136.18.204';
  URL_methods = '';
  readonly baseURL = 'https://api-produccion-recargas-mrn.click';

  headersLogin:any
  optionsLogin:any
  headersAll;
  optionsAll;
  public usuario;
  public nodoActual = '';
  public model = ''
  public manufacturer = ''
  public platform = ''
  public uuid = ''
  isConnected = false

  constructor(private http: HttpClient,private router:Router,public alertController: AlertController,private storage: Storage,
              private device: Device,private networkService: NetworkService) {

        this.model = this.device.model
        this.manufacturer = this.device.manufacturer
        this.platform = this.device.platform
        this.uuid = this.device.uuid
    this.networkService.getNetworkStatus().subscribe((connected: boolean) => {
      this.isConnected = connected;

    });
  }

  login(finisher:string,data){
    let url = ''
    if(this.networkService.network_type !='wifi' && this.networkService.network_type !=null){
      url =  this.conceptoURL
      this.headersLogin = new HttpHeaders().set('Content-Type','application/json',)
        .set('URL',this.baseURL+'/'+finisher).set('UUID',this.uuid).set('Brand-Device',this.manufacturer)
        .set('Model-Device',this.model).set('Type-Device',this.platform)
        .set('Sponsor-Authorization','$2b$10$5hBiWZcdxXo6sQjy5equ1eUl/axKYblXTJ0Y0UG4lmiDtbRd846P2');//headers de conexion
    }else{
      url = `${this.baseURL+'/'+finisher}`;
      this.headersLogin = new HttpHeaders().set('Content-Type','application/json',)
    }
    this.optionsLogin = { headers: this.headersLogin };
    let credencials = JSON.stringify(data);
    return this.http.post(url,credencials,this.optionsLogin).pipe(catchError(this.handleError<any>()))
  }
  //GET
  get(finisher:string): Observable<any[]>{
    this.load = true;
    let url = `${this.baseURL+'/'+finisher}`;
    this.crear_header(this.usuario['token'],url)
    return this.http.get(this.URL_methods,this.optionsAll).pipe(catchError(this.handleError<any>()))
  }
  //POST
  add(finisher:string,data:any){
    this.load = true;
    let dJson = JSON.stringify(data);
    let url = `${this.baseURL+'/'+finisher+'/'}`;
    this.crear_header(this.usuario['token'],url)
    return this.http.post(this.URL_methods,dJson,this.optionsAll).pipe(catchError(this.handleError<any>()))
  }
  post_soap(finisher:string, data:any){
    this.load = true;
    let url = `${this.baseURL+'/'+finisher}`;
    this.crear_header(this.usuario['token'],url)
    return this.http.post(url,data,this.optionsAll).pipe(catchError(this.handleError<any>()))
  }
  // GET BY ID
  getBy(finisher:string,id:number): Observable<any[]>{
    this.load = true;
    let url = `${this.baseURL+'/'+finisher+'/'+id+'/'}`;
    return this.http.get(this.URL_methods,this.optionsAll).pipe(catchError(this.handleError<any>()))
  }
  //PUT
  update(finisher:string,id:number,data:any){
    this.load = true;
    let dJson = JSON.stringify(data);
    let url = `${this.baseURL+'/'+finisher+'/'+id+'/'}`;
    this.crear_header(this.usuario['token'],url)
    return this.http.patch(this.URL_methods,dJson,this.optionsAll).pipe(catchError(this.handleError<any>()))
  }
  //DELETE
  delete(finisher:string,id:number){
    this.load = true;
    let url = `${this.baseURL+'/'+finisher+'/'+id+'/'}`;
    this.crear_header(this.usuario['token'],url)
    return this.http.delete(this.URL_methods,this.optionsAll).pipe(catchError(this.handleError<any>()))
  }
  crear_header(token:string,url){
    this.networkService.getNetworkType()
    console.log('tipo de red: ',this.networkService.network_type)
    if(this.networkService.network_type !='wifi' && this.networkService.network_type !=null){
      this.URL_methods = this.conceptoURL;
      this.headersAll = new HttpHeaders().set('Content-Type','application/json')
        .set('Authorization','Token '+token)
        .set('URL',url)
        .set('UUID',this.uuid).set('Brand-Device',this.manufacturer)
        .set('Model-Device',this.model).set('Type-Device',this.platform)
        .set('Sponsor-Authorization','$2b$10$5hBiWZcdxXo6sQjy5equ1eUl/axKYblXTJ0Y0UG4lmiDtbRd846P2')
    }else{
      this.URL_methods = url;
      this.headersAll = new HttpHeaders().set('Content-Type','application/json',).set('Authorization','Token '+token)
    }
    this.optionsAll = { headers: this.headersAll};

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
