import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import lazyImportBackend from "@/intl/plugins/lazyImport";

void i18n

  .use(lazyImportBackend)

// detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
// .use(LanguageDetector)
// pass the i18n instance to react-i18next.
  .use(initReactI18next)

// init i18next
// for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI:
    // https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    ns: ["common", "auth", "home", "notFound", "users"],
    defaultNS: "common",
    debug: true,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      // react already safes from xss
      escapeValue: false
    }
  });

export default i18n;
