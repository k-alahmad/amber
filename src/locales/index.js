import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const lnglocal = localStorage.getItem("lng");

i18n.use(initReactI18next).init({
  resources: {
    ar: {
      translation: {
        English: "English",
        Arabic: "العربية",
        home: "الرئيسية",
        exit: "خروج",
        cancel: "الغاء",
        ok: "موافق",
        download: "تحميل",
      },
    },
    en: {
      translation: {
        English: "English",
        Arabic: "العربية",
        home: "Home",
        exit: "Exit",
        cancel: "Cancel",
        ok: "Ok",
        download: "Download",
      },
    },
  },
  lng: lnglocal ?? "ar",
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});
