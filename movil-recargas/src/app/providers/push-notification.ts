import {Injectable} from "@angular/core";
import firebase from 'firebase'
import {Observable, Subject} from "rxjs/";
import {AngularFirestore} from "@angular/fire/firestore";
@Injectable()
export class PushNotificationService {
    messagingFirebase: firebase.messaging.Messaging;
    constructor(private afs: AngularFirestore) {
        this.messagingFirebase = firebase.messaging();
    }

    requestPermission = () => {
        return new Promise(async (resolve, reject) => {
            const permsis = await Notification.requestPermission();
            if (permsis === "granted") {
                const tokenFirebase = await this.messagingFirebase.getToken();
                resolve(tokenFirebase);
            } else {
                reject(new Error("No se otorgaron los permisos"))
            }
        })
    }

    private messaginObservable = new Observable<MessagePayload>(observe => {
        this.messagingFirebase.onMessage(payload => {
            observe.next(payload)
        })
    })


    receiveMessage() {
        return this.messaginObservable;
    }



}