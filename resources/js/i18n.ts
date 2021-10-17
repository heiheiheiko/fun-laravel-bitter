import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n';

function loadLocaleMessages(): LocaleMessages<VueMessageType> {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.ts$/i);
  const messages: LocaleMessages<VueMessageType> = {};
  locales.keys().forEach((key: any) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key).default || locales(key);
    }
  });
  return messages;
}

export default createI18n({
  legacy: false,
  locale: process.env.MIX_VUE_I18N_LOCALE || 'en',
  fallbackLocale: process.env.MIX_VUE_I18N_FALLBACK_LOCALE || 'en',
  globalInjection: true,
  messages: loadLocaleMessages(),
});
