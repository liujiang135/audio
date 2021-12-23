package com.huawei.cleaner;

import android.app.Activity;
import android.app.AppComponentFactory;
import android.app.Service;
import android.content.Intent;

public final class ShellComponentProxy extends AppComponentFactory {
    private static AppComponentFactory proxy = null;

    @Override
    public final Activity instantiateActivity( ClassLoader cl,String className,Intent intent) throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        if (proxy != null) {
            return proxy.instantiateActivity(cl, className, intent);
        }
        return super.instantiateActivity(cl, className, intent);
    }


    @Override
    public final Service instantiateService( ClassLoader cl,String className,Intent intent) throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        if (proxy != null) {
            return proxy.instantiateService(cl, className, intent);
        }
        return super.instantiateService(cl, className, intent);
    }
}
