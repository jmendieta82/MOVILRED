// Importar los Módulos Necesarios
import {Injectable} from '@angular/core';
import {Network} from '@ionic-native/network/ngx';
import {Platform, ToastController} from '@ionic/angular';
import {Observable, fromEvent, merge, of, BehaviorSubject} from 'rxjs';
import {mapTo} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Mrn} from "./mrn";
import {ApiService} from "./api";


@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private online: Observable<boolean> = null;
  private hasConnection = new BehaviorSubject(false);
  public network_type = ''


  constructor(
    private network: Network,
    private platform: Platform,
    private http: HttpClient,
    private toastController: ToastController,
    public mrn:Mrn,public api:ApiService,) {

    if (this.platform.is('cordova')) {
      // on Device
      this.network.onConnect().subscribe(() => {
        this.getNetworkType();
        this.testNetworkConnection()
        setTimeout(()=>{
          this.presentToast('!La conexión ha cambiado a '+this.network_type)
          this.mrn.login_actions(this.api.usuario)
        },4000)
      });
      this.network.onDisconnect().subscribe(() => {
        this.getNetworkType()
        console.log('network was disconnected :-(');
        //this.hasConnection.next(false);
      });
    } else {
      // on Browser
      this.online = merge(
        of(navigator.onLine),
        fromEvent(window, 'online').pipe(mapTo(true)),
        fromEvent(window, 'offline').pipe(mapTo(false))
      );

      this.online.subscribe((isOnline) => {
        if (isOnline) {
          this.hasConnection.next(true);
          this.getNetworkType();
          this.testNetworkConnection()

          setTimeout(()=>{
            console.log('empezando la carga',this.api.conectado)
            this.presentToast('!La conexión ha cambiado a '+this.network_type)
            this.mrn.login_actions(this.api.usuario)
          },4000)

        } else {
          this.getNetworkType()
          this.hasConnection.next(false);
        }
      });
    }
    this.testNetworkConnection();
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top'
    });

    await toast.present();
  }

  public getNetworkType() {
    this.api.tipo_red = this.network.type
    this.network_type = this.network.type;
    console.log(this.api.tipo_red)
  }

  public getNetworkStatus(): Observable<boolean> {
    return this.hasConnection.asObservable();
  }

  private getNetworkTestRequest(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  public async testNetworkConnection() {
    try {
      this.getNetworkTestRequest()
        .subscribe(success => {
          // colocar las cabeceras normales
          console.log('Request to Google Test  success', success);
          this.hasConnection.next(true);
          this.api.conectado=true
        }, error => {
          // colocar cabeceras de concepto movil
          console.log('Request to Google Test fails', error);
          this.api.conectado=false
          this.hasConnection.next(false);
        });
    } catch (err) {
      console.log('err testNetworkConnection', err);
      this.hasConnection.next(false);
      this.api.conectado=false
      return;
    }
  }

}
