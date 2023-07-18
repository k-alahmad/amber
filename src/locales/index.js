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
				HeaderTitleOne: "العيش في منزل أحلامك ليس بعيد!",
				HeaderSubTitleOne: "إنتقل الى منزل أحلامك في العام القادم",
				HeaderTitleTwo: "الحياة الفاخرة في دبي بإنتظارك",
				HeaderSubTitleTwo:
					"تمتع في العيش في منازل رائعة في موقع مميز. و إبدأ رحلتك في العيش في منزل احلامك . لا تفوت الفرصة للعيش في إحدى أكثر المدن المرغوبة في العالم.",
				HeaderMainTitle: "مساكن تخاطب الروح",
				palm: "نخلة الجميرة",
				airport: "مطار دبي الدولي",
				khalifa: "برج خليفة",
				jbrbeach: "مساكن شاطئ الجميرة",
				burjalarab: "برج العرب",
				circlemall: "المول الدائري",
				britishschool: "المدرسة البريطانية",
				hospital: "مستشفیات الامارات",
				minutes: "دقيقة",
				nearbyTitle: "وصول سهل الى المعالم الرئيسية",
				nearbySubTitle:
					"موقع مميز في قلب دبي يوفر سهولة الوصول الى معظم المعالم الرئيسية",
				slogan: "نجعل منزل أحلامك حقيقة",
				formSubTitle: "أحد عملائنا سيقوم بالاتصال بك باسرع وقت",
				brochurDownload: "تحميل الكتيب",
				formFullName: "الاسم الكامل",
				formPhoneNumber: "رقم الموبايل",
				formEmail: "الايميل",
				PaymentPlan: "خطة الدفع",
				PaymentPlanType: "خطة الدفع عند التسليم",
				BookingAmount: "مبلغ الحجز",
				installments: "10% مقسمة على الدفعة الثانية والثالثة",
				installments2: "4% كل شهر لمدة 10 أشهر",
				finalInsallment: "الدفعة النهائية",
				price: "بأسعار تبدأ من",
				floorTitle: "مخطط الطابق و الوحدات",
				floorBedroom: "غرفة نوم",
				floorTotalSaleable: "مجموع المساحة القابلة للبيع",
				floorSuite: "جناح",
				floorBalcony: "البلكون",
				floorTotal: "المجموع",
				address: "مكتب 609 ، برج كلوفر باي - 6 أ مراسي - الخليج التجاري - دبي",
				locationTitle: "المخطط الرئيسي للموقع",
				brochurMSG: "الرجاء التسجيل لتنزيل الكتيب",
				roomCode: "كود: ",
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
				roomCode: "Code: ",
				HeaderTitleOne: "Living in your Dream Home isn't far away!",
				HeaderSubTitleOne: "Move in next Year.",
				HeaderTitleTwo: "Luxury Living in Dubai Awaits!",
				HeaderSubTitleTwo:
					"Discover Exquisite Residences in Prime Locations. Embark on your journey to find your dream home in Dubai. Experience luxury living at its finest with our exclusive residences. Don't miss out on this unique opportunity to live in one of the world's most desirable cities.",
				HeaderMainTitle: "Specially Designed Residences",
				palm: "Plam Jumeirah",
				airport: "Dubai Airport",
				khalifa: "Khalifa Tower",
				jbrbeach: "JBR Beach",
				burjalarab: "Burj Al Arab",
				circlemall: "Circle Mall",
				britishschool: "Dubai British School",
				hospital: "Emirates Hospitals",
				minutes: "Minutes",
				nearbyTitle: "EASY ACCESS TO KEY LANDMARKS",
				nearbySubTitle: "Distinguished Location, Right in the Center of Dubai",
				slogan: "Make Your Dream Home Reality",
				formSubTitle: "One of Our Agents will contact you very shortly",
				brochurDownload: "Download Brochur",
				formFullName: "Full Name",
				formPhoneNumber: "Phone Number",
				formEmail: "Email",
				PaymentPlan: "Payment Plan",
				PaymentPlanType: "Handover payment plan",
				BookingAmount: "Booking Amount",
				installments: "10% divided for 2nd & 3rd Installment",
				installments2: "4% Installments for 10 months",
				finalInsallment: "Final Installment",
				price: "Starting Price",
				floorTitle: "FLOOR PLAN AND UNIT PLANS",
				floorBedroom: "BR",
				floorTotalSaleable: "TOTAL SALEABLE AREA",
				floorSuite: "SUITE",
				floorBalcony: "BALCONY",
				floorTotal: "TOTAL AREA",
				address:
					" Office 609, Clover Bay Tower - 6a Marasi Dr - Business Bay - Dubai",
				locationTitle: "Site Location Masterplan",
				brochurMSG: "Please Register to Download the Brochur",
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
				HeaderTitleTwo: "لحظه شماری برای زندگی لوکس در دبی",
				HeaderSubTitleTwo:
					"امکانات منحصر به فرد و لاکچری شامل دریاچه مصنوعی ، فضای سبز ، کلاب گلف ...غیره",
				HeaderMainTitle: "طراحی خاص ومتفاوت فضای مسکونی",
				palm: "پالم جمیرا",
				airport: "فرودگاه دبی",
				khalifa: "برج خلیفه",
				jbrbeach: "JBR Beach",
				burjalarab: "برج العرب",
				circlemall: "Cicle Mall",
				britishschool: "مدرسه بریتانیایی دبی",
				hospital: "بیمارستان امارات",
				minutes: "دقیقه",
				nearbyTitle: "دسترسی ها به نقاط کلیدی",
				nearbySubTitle: "موقعیت مکانی ممتاز، درست در مرکز دبی",
				slogan: "داشتن خانه رویایی تان را به واقعیت تبدیل میکنیم",
				formSubTitle:
					"یکی از مشاوران ما در کوتاه ترین زمان ممکن با شما تماس خواهد گرفت",
				brochurDownload: "دانلود بروشور",
				formFullName: "نام و نام خانوادگی",
				formPhoneNumber: "شماره تلفون",
				formEmail: "ایمیل",
				PaymentPlan: "نحوه پرداخت اقساط",
				PaymentPlanType: "اقساط از تحویل",
				BookingAmount: "قسط اخر",
				installments: "قسط دوم و سوم هر کدام 5%",
				installments2: "اقساط 4% به مدت 10 ماه",
				finalInsallment: "میزان بیعانه",
				price: "شروع قیمت از",
				floorTitle: "پلان طبقات و واحد ها",
				floorBedroom: "خوابه",
				floorTotalSaleable: "متراژ کل",
				floorSuite: "سوئیت",
				floorBalcony: "بالکن",
				floorTotal: "کل",
				address: "دبی - بیزینس بی - ساختمان کلاور بی - واحد ۶۰۹",
				locationTitle: "موقعیت پروژه و مستر پلان",
				brochurMSG: "لطفا برای دانلود بروشور ثبت نام کنید",
				roomCode: "کد: ",
			},
		},
	},
	lng: lnglocal ?? "ar",
	fallbackLng: "ar",
	interpolation: {
		escapeValue: false,
	},
});
