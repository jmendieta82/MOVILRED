import { Component, OnInit } from '@angular/core';
import { ApiService } from '../providers/api';
import {Mrn} from "../providers/mrn";

@Component({
  selector: 'app-mi-distribuidor',
  templateUrl: './mi-distribuidor.page.html',
  styleUrls: ['./mi-distribuidor.page.scss'],
})
export class MiDistribuidorPage implements OnInit {
  distribuidor;

  constructor(public mrn:Mrn,private api:ApiService) { }

  ngOnInit() {
    this.get_distribuidor()
  }

  get_distribuidor(){
    this.api.get('nodo/?id='+this.api.nodoActual['nodoPadre'])
      .subscribe(
        data=>{
          if(data!= undefined){
            this.distribuidor = data[0];
          }
        }
      )
  }

}
