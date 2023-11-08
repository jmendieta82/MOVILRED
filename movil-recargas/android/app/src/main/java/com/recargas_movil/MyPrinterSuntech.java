package com.recargas_movil;

import android.app.Application;
import android.content.Context;

import androidx.multidex.MultiDex;

import com.imagpay.Settings;
import com.imagpay.mpos.MposHandler;

public class MyPrinterSuntech extends Application {
  private MposHandler _handler;
  private Settings _setting;

  @Override
  public void onCreate() {
    super.onCreate();
  }

  public MposHandler get_handler() {
    return _handler;
  }

  public void set_handler(MposHandler _handler) {
    this._handler = _handler;
  }

  public Settings get_setting() {
    return _setting;
  }

  public void set_setting(Settings _setting) {
    this._setting = _setting;
  }

  @Override
  protected void attachBaseContext(Context base) {
    super.attachBaseContext(base);
    MultiDex.install(this);
  }
}

