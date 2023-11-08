package com.recargas_movil;

import android.os.Build;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONException;

@CapacitorPlugin(name = "Print")
public class PrintPlugin extends Plugin {

  PrinterGeneral printerGeneral = new PrinterGeneral();

  @PluginMethod()
  public void print(PluginCall call) {
    String value = call.getString("value");

    JSObject ret = new JSObject();
    ret.put("value", value);
    call.resolve(ret);

    this.printerGeneral.printerDirectSuntech(getActivity(), value);
  }

  @PluginMethod()
  public void canPrint(PluginCall call) {
    String[] supportedABIs = Build.SUPPORTED_ABIS;
    boolean puedeImprimir = supportedABIs[0].equals("armeabi-v7a");
    System.out.println("a ver si puede imprimir::: " + puedeImprimir);

    JSObject ret = new JSObject();
    ret.put("value", puedeImprimir);
    call.resolve(ret);

  }

  @PluginMethod
  public void print_recibo(PluginCall call) throws JSONException {
    JSArray data = call.getArray("value");

    System.out.println("esto es en el PrintPlugin.java");
    System.out.println(data.get(0).toString());
    System.out.println(data.length());

    JSObject ret = new JSObject();
    ret.put("value", "impreso");
    call.resolve(ret);

    this.printerGeneral.print_recibo(getActivity(), data);
  }
}
