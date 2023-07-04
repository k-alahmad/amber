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
				HeaderTitleOne: "عيش تجربة مثيرة للروح",
				HeaderSubTitleOne: "و أنت تستسلم لنداء المياه الساحر في محيطك",
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
				HeaderTitleOne: "Unveil a soul-stirring experience",
				HeaderSubTitleOne:
					"as you surrender to the enchanting call of the water in your vicinity",
			},
		},
	},
	lng: lnglocal ?? "ar",
	fallbackLng: "ar",
	interpolation: {
		escapeValue: false,
	},
});
