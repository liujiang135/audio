package com.newpower.ohoscleaner2.device.util;

import ohos.app.AbilityContext;
import ohos.global.configuration.Configuration;
import ohos.global.configuration.LocaleProfile;
import ohos.global.resource.Resource;
import ohos.utils.zson.ZSONObject;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Objects;

public class TemplateUtil {
    private static final String TEMPLATE_FILE = "resources/rawfile/template_%s.json";
    private static final String RESOURCE_FOLDER = "/common/image";

    private static AbilityContext context = null;

    public static void init(AbilityContext abilityContext) {
        context = abilityContext;
    }

    public static String getLanguage() {
        Configuration configuration = new Configuration();
        LocaleProfile localeProfile = configuration.getLocaleProfile();
        return localeProfile.getLocales()[0].getLanguage();
    }

    public static Resource getResource(String uri) throws IOException {
        return context.getResourceManager().getRawFileEntry(uri).openRawFile();
    }

    public static ZSONObject getTemplate() {
        final String template = String.format(TEMPLATE_FILE, getLanguage());
        ZSONObject result = null;

        try {
            Resource resource = getResource(template);
            byte[] buffer = new byte[1024 * 1024];
            int reads = resource.read(buffer);
            if (reads != -1) {
                String jsonString = new String(buffer, 0, reads, StandardCharsets.UTF_8);
                result = ZSONObject.stringToZSON(jsonString);
            }
        } catch (IOException e) {
        }

        Objects.requireNonNull(result).put("iconUrl", RESOURCE_FOLDER);
        return result;
    }

}