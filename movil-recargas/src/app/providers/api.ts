import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs/';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AlertController, ToastController} from "@ionic/angular";
import {Storage} from "@ionic/storage-angular";
import { Device } from '@awesome-cordova-plugins/device/ngx';
@Injectable()
export class ApiService {

  //readonly baseURL = 'http://127.0.0.1:8000';
  readonly baseURL = 'https://api-produccion-recargas-mrn.click';


  readonly conceptoURL = 'https://150.136.18.204'//produccion;
  //readonly conceptoURL = 'https://129.159.64.15' // pruebas;
  load = false;
  API_Key_Concepto_produccion = '$2b$10$5hBiWZcdxXo6sQjy5equ1eUl/axKYblXTJ0Y0UG4lmiDtbRd846P2'
  //API_Key_Concepto_pruebas = ' $2b$10$8CT.SGdhz1oQbF4ZZ7cFp.Zv2yk.UBKaSlQ/Po3LV68OGC5Jr.Z1e'
  URL_methods = '';


  headersLogin:any
  optionsLogin:any
  headersAll;
  optionsAll;
  tipo_datos = ''
  tipo_red = ''
  public usuario;
  public nodoActual = '';
  public model = ''
  public manufacturer = ''
  public platform = ''
  public uuid = ''
  public conectado = false

  constructor(private http: HttpClient,private router:Router,
              public alertController: AlertController,private storage: Storage,
              private device: Device,public toastController: ToastController) {

        this.model = this.device.model
        this.manufacturer = this.device.manufacturer
        this.platform = this.device.platform
        this.uuid = this.device.uuid

  }

  login(finisher:string,data){
    let url = ''
    if(!this.conectado){
      url =  this.conceptoURL
      this.headersLogin = new HttpHeaders().set('Content-Type','application/json',)
        .set('URL',this.baseURL+'/'+finisher).set('UUID',this.uuid).set('Brand-Device',this.manufacturer)
        .set('Model-Device',this.model).set('Type-Device',this.platform)
        .set('Sponsor-Authorization',this.API_Key_Concepto_produccion);//headers de conexion
    }else{
      url = `${this.baseURL+'/'+finisher}`;
      this.headersLogin = new HttpHeaders().set('Content-Type','application/json',)
    }
    this.optionsLogin = {headers:this.headersLogin}
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
    return this.http.post(this.URL_methods,data,this.optionsAll).pipe(catchError(this.handleError<any>()))
  }
  // GET BY ID
  //PUT
  update(finisher:string,id:number,data:any){
    this.load = true;
    let dJson = JSON.stringify(data);
    let url = `${this.baseURL+'/'+finisher+'/'+id+'/'}`;
    this.crear_header(this.usuario['token'],url)
    return this.http.patch(this.URL_methods,dJson,this.optionsAll).pipe(catchError(this.handleError<any>()))
  }
  //DELETE
  crear_header(token:string,url,){
   if(!this.conectado){
      this.tipo_datos = 'patrocinados'
      this.URL_methods = this.conceptoURL;
      this.headersAll = new HttpHeaders().set('Content-Type','application/json')
        .set('Authorization','Token '+token)
        .set('URL',url)
        .set('UUID',this.uuid).set('Brand-Device',this.manufacturer)
        .set('Model-Device',this.model).set('Type-Device',this.platform)
        .set('Sponsor-Authorization',this.API_Key_Concepto_produccion)
    }else{
      this.tipo_datos = 'postpago'
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

  async mensaje(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
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
