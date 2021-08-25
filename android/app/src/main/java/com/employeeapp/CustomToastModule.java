package com.employeeapp;

import android.view.Gravity;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

class CustomToastModule extends ReactContextBaseJavaModule {

    CustomToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "CustomToast";
    }

    @ReactMethod
    void MyToast(String message) {
        Toast toast=Toast.makeText(getCurrentActivity().getBaseContext(),message,Toast.LENGTH_SHORT);
        toast.setGravity(Gravity.BOTTOM, 0, 50);
        toast.show();
    }
}
