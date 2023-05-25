import { Injectable } from '@angular/core';
declare var BTPrinter: any;

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  imprimirTexto(texto: string) {
    BTPrinter.list((devices: any[]) => {
      if (devices.length > 0) {
        const device = devices[0];
        BTPrinter.connect(device.address, () => {
          BTPrinter.printText(device.address, texto, () => {
            console.log('Impresión exitosa');
          }, (error: any) => {
            console.error('Error al imprimir:', error);
          });
        }, (error: any) => {
          console.error('Error al conectar con la impresora:', error);
        });
      } else {
        console.error('No se encontraron impresoras Bluetooth.');
      }
    }, (error: any) => {
      console.error('Error al obtener la lista de impresoras:', error);
    });
  }

}
