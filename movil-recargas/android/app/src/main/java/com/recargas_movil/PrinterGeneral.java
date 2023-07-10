package com.recargas_movil;

import android.content.Context;

import com.getcapacitor.JSArray;
import com.imagpay.PrnStrFormat;
import com.imagpay.Settings;
import com.imagpay.enums.PrnTextFont;

import org.json.JSONException;
import org.json.JSONObject;

public class PrinterGeneral {

  public void printerDirectSuntech(Context context, final String msg) {

    try {
      new Thread(new Runnable() {
        @Override
        public void run() {

          Settings settings = Utilities.myPrinterSuntech.get_setting();
          boolean impresoraLista = Utilities.myPrinterSuntech.get_setting().mPosEnterPrint();
          System.out.println("mPosEnterPrint:" + impresoraLista);
          if (impresoraLista) {
            settings.mPosPrintAlign(Settings.MPOS_PRINT_ALIGN_LEFT);
            settings.mPosPrintTextSize(Settings.MPOS_PRINT_TEXT_NORMAL);
            settings.mPosPrnStr(msg);
            settings.mPosPrnStr("\n");
            settings.prnStart();
          } else {
          }
        }
      }).start();
    } catch (Exception ex) {
      System.out.println("Excepcion ... " + ex.toString());
    }
  }

  public void print_recibo(Context context, final JSArray data) throws JSONException {

//    System.out.println("los datos del recibo ...");
//    System.out.println(data.get(0).toString());
//    System.out.println(data.length());

//    {"label":"Fecha","value":"10\/05\/2023 10:25 AM"}

//    System.out.println("-->>" + data.get(0).getClass());

    try {

      new Thread(new Runnable() {
        @Override
        public void run() {
          Settings settings = Utilities.myPrinterSuntech.get_setting();
          boolean impresoraLista = Utilities.myPrinterSuntech.get_setting().mPosEnterPrint();
          System.out.println("mPosEnterPrint:" + impresoraLista);

          if (impresoraLista) {
            StringBuffer receipts = new StringBuffer();
            PrnStrFormat psf = new PrnStrFormat();
            psf.setFont(PrnTextFont.MONOSPACE);
            psf.setTextSize(34);

            JSONObject item = null;
            for (int i = 0; i < data.length(); i++) {
              try {
                item = data.getJSONObject(i);
                receipts.append(item.getString("label") + ":\n");
                receipts.append(item.getString("value") + "\n\n");
              } catch (JSONException e) {
                System.out.println("Error leyendo un renglon");
                throw new RuntimeException(e);
              }
            }
            settings.mPosPrnStr(receipts.toString());
//            settings.prnStr(receipts.toString());
            settings.prnStart();
          }
        }
      }).start();

    } catch (Exception ex) {
      System.out.println("Excepcion ... " + ex.toString());
    }


  }
}
