// Importar los Módulos Necesarios
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Platform } from '@ionic/angular';
import { Observable, fromEvent, merge, of, BehaviorSubject } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


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
    private http: HttpClient) {

    if (this.platform.is('cordova')) {
      // on Device
      this.network.onConnect().subscribe(() => {
        console.log('network was connected :-)');
        this.hasConnection.next(true);
        this.getNetworkType()
        return;
      });
      this.network.onDisconnect().subscribe(() => {
        console.log('network was disconnected :-(');
        this.hasConnection.next(false);
        this.getNetworkType()
        return;
      });
    } else {
      // on Browser
      this.online = merge(
        of(navigator.onLine),
        fromEvent(window, 'online').pipe(mapTo(true)),
        fromEvent(window, 'offline').pipe(mapTo(false))
      );

      this.online.subscribe((isOnline) =>{
        if (isOnline) {
          this.hasConnection.next(true);
          this.getNetworkType()
          console.log('network was online :-)');

        } else {
          console.log('network was offline :-(');
          this.getNetworkType()
          this.hasConnection.next(false);
        }
      });
    }
  }

  public getNetworkType(){
    this.network_type = this.network.type;

  }

  public getNetworkStatus(): Observable<boolean> {
    return this.hasConnection.asObservable();
  }

  public getNetworkTestRequest(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  public async testNetworkConnection():Promise<boolean> {
    try {
      this.getNetworkTestRequest().subscribe(
        success => {
          console.log('Request to Google Test  success', success);
          //this.hasConnection.next(true);
          return true;
        }, error => {
          console.log('Request to Google Test fails', error);
          //this.hasConnection.next(false);
          return false;
        });
    } catch (err) {
      console.log('err testNetworkConnection', err);
      this.hasConnection.next(false);
      return false;
    }
  }

}
