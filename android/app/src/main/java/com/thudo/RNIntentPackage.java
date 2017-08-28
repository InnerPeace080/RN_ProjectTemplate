package com.thudo;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.List;

/**
 * @author phuongtq
 * @file ....java
 * @brief ....java source file.
 * <p>
 * File/module comments.
 * @mobile 01684499886
 * @note No Note at the moment
 * @bug No known bugs.
 * <p>
 * <pre>
 * MODIFICATION HISTORY:
 *
 * Ver   Who  	  Date       Changes
 * ----- --------- ---------- -----------------------------------------------
 * 1.00  phuongtq   3/9/2016 First release
 *
 *
 * </pre>
 */

public class RNIntentPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new RNIntentModule(reactContext));

        return modules;
    }


    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return new ArrayList();
    }
}
