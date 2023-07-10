import { Component } from '@angular/core';
import {Mrn} from "./providers/mrn";
import {ActionPerformed, PushNotificationSchema, PushNotifications, Token,} from '@capacitor/push-notifications';
import {ApiService} from "./providers/api";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";
import {NetworkService} from "./providers/network.service";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Ventas', url: '/inicio', icon: 'fas fa-store' },
    { title: 'Solicitudes de Saldo', url: '/saldo', icon: 'fas fa-hand-holding-usd' },
    { title: 'Salir', url: '/login', icon: 'fas fa-times' },
  ];
  constructor(public mrn:Mrn,public api:ApiService, private router:Router,private networkService:NetworkService,
              ) {
    this.mrn.crearControles();
  }

  ngOnInit() {

    this.networkService.getNetworkType()

    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      this.mrn.tokenMessage = token.value
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error on registration: ' + JSON.stringify(error))
      //alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        if(notification.body){
          this.mrn.mensajes(notification.body)
        }
        switch(notification.data.accion) {
          case 'SS': {
            this.mrn.getSolicitudesSaldo();
            this.mrn.getMisBolsasDinero();
            this.mrn.getSolicitudesSaldo()
            break;
          }
          case 'ACTND': {
            this.mrn.getNodoById(this.api.nodoActual)
            break;
          }
          case 'ASS': {
            this.mrn.getMisSolicitudesSaldo();
            this.mrn.getMisBolsasDinero();
            this.mrn.getMiCredito()
            break;
          }
          case 'CPROV': {
            this.mrn.getMisSolicitudesSaldo();
            this.mrn.getMisBolsasDinero();
            this.mrn.getMiCredito()
            break;
          }
          case 'AJS': {
            this.mrn.getMisBolsasDinero();
            break;
          }
          case 'VEN': {
            this.mrn.SALDOWS = {
              usuario:this.mrn.USUARIO_MSV,
              password:this.mrn.PWD_MVS,
              canal_transaccion:2,
              bolsa:'M',
            }
            this.mrn.getMisBolsasDinero();
            break;
          }
          case 'TRF': {
            //transacciones fallidas
            break;
          }
          case 'APSCR': {
            this.mrn.getMisBolsasDinero();
            this.mrn.getMiCredito()
            this.mrn.getMisSolicitudesSaldo();
            this.mrn.getNodoById(this.api.nodoActual)
            break;
          }
          case 'ACMC': {
            this.mrn.getMiCredito()
            break;
          }
          case 'SSRCH': {
            this.mrn.getMisSolicitudesSaldo();
            break;
          }
          case 'USM': {
            //usuario en mora
            this.mrn.getFacturasMora(this.api.nodoActual,false)
            this.router.navigate(['/mora'])
            break;
          }
          case 'ACTCOM': {
            this.mrn.getCatServicio();
            this.mrn.getComisiones(this.api.nodoActual)
            break;
          }
          default: {
            //statements;
            break;
          }
        }

      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        console.log('Push action performed: ' + JSON.stringify(notification))
      },
    );
  }



}
