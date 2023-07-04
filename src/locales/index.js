import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const lnglocal = localStorage.getItem("lng");

i18n.use(initReactI18next).init({
	resources: {
		ar: {
			translation: {
				English: "English",
				Arabic: "العربية",
				Persian: "فارسی",
				code: "Ar",
				home: "الرئيسية",
				exit: "خروج",
				cancel: "الغاء",
				ok: "موافق",
				menu: "القائمة",
				register: "سجل الآن",
				download: "تحميل",
				HeaderTitleOne: "عيش تجربة مثيرة للروح",
				HeaderSubTitleOne: "و أنت تستسلم لنداء المياه الساحر في محيطك",
				HeaderTitleTwo: "مشهد مذهل و خلاب",
				HeaderSubTitleTwo:
					"بتصميم هلالي يسمح لك بالاسترخاء و انت تستمتع بالمياه النقية من حولك",
				HeaderMainTitle: "منازل مصممة بشكل خاص",
			},
		},
		en: {
			translation: {
				English: "English",
				Arabic: "العربية",
				Persian: "فارسی",
				code: "En",
				home: "Home",
				exit: "Exit",
				cancel: "Cancel",
				ok: "Ok",
				menu: "Menu",
				register: "Register Now",
				download: "Download",
				HeaderTitleOne: "Unveil a soul-stirring experience",
				HeaderSubTitleOne:
					"as you surrender to the enchanting call of the water in your vicinity",
				HeaderTitleTwo: "A spectacular sight that delights",
				HeaderSubTitleTwo:
					"Designed like a tapered crescent, catch the reflected hues of the cluster, dazzle in the reflections of the crystal-clear water as you unwind in luxury",
				HeaderMainTitle: "Specially Designed Residences",
			},
		},
		fa: {
			translation: {
				English: "English",
				Arabic: "العربية",
				Persian: "فارسی",
				code: "Fa",
				home: "خانه",
				exit: "خروجی",
				cancel: "کانسل",
				ok: "بله",
				menu: "منو",
				register: "ثبت نام",
				download: "دانلود",
				HeaderTitleOne: "پرده برداری از یک تجربه منحصر به فرد",
				HeaderSubTitleOne: "دید ابدی به دریاچه و فضای سبز",
				HeaderTitleTwo: "منظره دیدنی",
				HeaderSubTitleTwo:
					"امکانات منحصر به فرد و لاکچری شامل دریاچه مصنوعی ، فضای سبز ، کلاب گلف ...غیره",
				HeaderMainTitle: "طراحی خاص و متفاوت فضای مسکونی",
			},
		},
	},
	lng: lnglocal ?? "ar",
	fallbackLng: "ar",
	interpolation: {
		escapeValue: false,
	},
});
