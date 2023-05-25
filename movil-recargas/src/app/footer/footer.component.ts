import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Mrn} from "../providers/mrn";
import {ApiService} from "../providers/api";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  constructor(public mrn: Mrn,public api:ApiService) {
  }



}
