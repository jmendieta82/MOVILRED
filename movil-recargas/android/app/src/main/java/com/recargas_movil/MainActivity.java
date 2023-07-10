package com.recargas_movil;

import android.content.Context;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.imagpay.Settings;
import com.imagpay.SwipeEvent;
import com.imagpay.SwipeListener;
import com.imagpay.enums.CardDetected;
import com.imagpay.enums.EmvStatus;
import com.imagpay.enums.PrintStatus;
import com.imagpay.mpos.MposHandler;

public class MainActivity extends BridgeActivity implements SwipeListener {
  private Context context = MainActivity.this;

  @Override
  public void onCreate(Bundle savedInstanceState) {
    registerPlugin(PrintPlugin.class);
    super.onCreate(savedInstanceState);

    try {
      initViews();
    } catch (Exception ex) {
      System.out.println("Excepcion ... " + ex.toString());
      //DialogMessage.createDialog(context, "Excepcion", ex.toString()).show();
    }

  }

  private void initViews() {
    try {
      MposHandler handler = new MposHandler(getApplicationContext());
      Settings settings = Settings.getInstance(handler);
      settings.mPosPowerOn();


      if (!handler.isConnected()) {
        System.out.println("Connect Res:" + handler.connect());
      } else {
        handler.close();
        System.out.println("ReConnect Res:" + handler.connect());
        // sendMessage("TLL has connected!");
      }
      // add linstener for connection
      handler.addSwipeListener(this);
      // add linstener for read IC chip card
      // handler.addEMVListener(this);
      handler.setShowLog(true);

      Utilities.myPrinterSuntech = (MyPrinterSuntech) getApplication();
      Utilities.myPrinterSuntech.set_handler(handler);
      Utilities.myPrinterSuntech.set_setting(settings);
    } catch (Exception ex) {
      System.out.println("Excepcion .... " + ex.getMessage());
    }
  }

  @Override
  public void onDisconnected(SwipeEvent swipeEvent) {

  }

  @Override
  public void onConnected(SwipeEvent swipeEvent) {

  }

  @Override
  public void onParseData(SwipeEvent swipeEvent) {

  }

  @Override
  public void onCardDetect(CardDetected cardDetected) {

  }

  @Override
  public void onPrintStatus(PrintStatus printStatus) {

  }

  @Override
  public void onEmvStatus(EmvStatus emvStatus) {

  }

}
