import {Injectable} from '@angular/core';
import {HttpHandler, HttpRequest, HttpInterceptor} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {Mrn} from "./mrn";
import {Router} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private mrn: Mrn,private messageService: MessageService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            catchError(error => {
                if(typeof error.error === 'string'){
                    this.messageService.add({severity:'error', summary: 'Mrn Colombia', detail:  error.error,life:5000});
                }else {
                    for (let key of Object.keys(error.error)) {
                        for(let i of error.error[key]){
                            this.messageService.add({severity:'error', summary: key.toUpperCase(), detail: i,life:5000});
                        }
                    }
                }
                return throwError(error);
            })
        );
    }

    getShortUrl(url) {
        return url.slice(46, url.length)
    }
}
