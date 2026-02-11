import React, { createContext, useContext, useState } from "react";

type Lang = "mk" | "en";

const translations = {
  mk: {
    nav_book: "Закажи",
    nav_about: "За Нас",
    nav_treatments: "Третмани",
    nav_process: "Процес",
    nav_contact: "Контакт",
    hero_badge: "✓ Дипломиран физиотерапевт • 4+ години искуство",
    hero_title: "Вратете Се Во Движење Без Болка",
    hero_subtitle: "Персонализирани третмани што го решаваат коренот на проблемот, не само симптомите. Над 500 задоволни клиенти во Скопје.",
    hero_cta: "Закажете Бесплатна Консултација",
    testimonials_title: "Што Велат Нашите Клиенти",
    testi_1_text: "После 2 месеци кај други физиотерапевти, Иво ми го поправи рамото за 3 сесии. Сега играм кошарка без болка.",
    testi_1_name: "Марко, 34, спортист",
    testi_2_text: "Хроничната болка во грбот што ме мачеше 5 години конечно исчезна. Му благодарам на Иво за неговиот пристап.",
    testi_2_name: "Елена, 41, менаџер",
    testi_3_text: "Откако се повредив на работа, мислев дека нема да можам да се вратам. Со Иво се вратив посилен од порано.",
    testi_3_name: "Стефан, 29, градежен работник",
    treatments_title: "Специјализирани Третмани",
    treat_1: "Спортски повреди",
    treat_2: "Хронична болка во грб",
    treat_3: "Пост-операциска рехабилитација",
    treat_4: "Проблеми со колена",
    treat_5: "Корекција на постава",
    treat_6: "Мобилност за постари",
    treat_7: "Перформанс оптимизација",
    treat_8: "Третман на тригер точки",
    why_title: "Зошто Иво?",
    why_1_title: "Персонализиран Пристап",
    why_1_text: "Ниту еден третман не е ист. Секој план е направен според вашето тело.",
    why_2_title: "Решавање на Коренот",
    why_2_text: "Не само третираме болка — го наоѓаме зошто се случува и го решаваме тоа.",
    why_3_title: "Брзи Резултати",
    why_3_text: "Повеќето клиенти чувствуваат подобрување за 2-3 сесии, не месеци.",
    about_title: "За Иво Талески",
    about_bio: "Веќе 4 години им помагам на луѓето во Скопје да се движат подобро и да живеат без болка. Комбинирам современи физиотерапевтски техники со длабоко разбирање на тоа како вашето тело навистина функционира.",
    cred_1: "Дипломиран физиотерапевт",
    cred_2: "Магистер по спортска рехабилитација",
    cred_3: "Обука во мануална терапија",
    cred_4: "4+ години клиничко искуство",
    process_title: "Како Работи?",
    process_1_title: "Бесплатна Консултација",
    process_1_text: "Разговараме за вашата болка, историја и цели. Без обврски.",
    process_2_title: "Детална Оценка",
    process_2_text: "Правам темелна физичка проценка за да го најдам коренот на проблемот.",
    process_3_title: "Персонализиран План",
    process_3_text: "Заедно креираме план што работи за вашиот живот и води до резултати.",
    visit_title: "Контактирајте не",
    address: "Скопје, Македонија",
    final_cta_title: "Подготвени Да Се Движите Без Болка?",
    final_cta_text: "Закажете бесплатна 20-минутна консултација.",
    final_cta_btn: "Закажете Сега",
    footer_created_by: "Изработено од fs digital.mk",
  },
  en: {
    nav_book: "Book Now",
    nav_about: "About",
    nav_treatments: "Treatments",
    nav_process: "Process",
    nav_contact: "Contact",
    hero_badge: "✓ Graduate Physiotherapist • 4+ Years Experience",
    hero_title: "Get Back to Moving Without Pain",
    hero_subtitle: "Personalized treatments that solve the root cause, not just symptoms. Over 500 satisfied clients in Skopje.",
    hero_cta: "Book Your Free Consultation",
    testimonials_title: "What Our Clients Say",
    testi_1_text: "After 2 months with other physios, Ivo fixed my shoulder in 3 sessions. Now I play basketball pain-free.",
    testi_1_name: "Marko, 34, athlete",
    testi_2_text: "The chronic back pain that bothered me for 5 years finally disappeared. I'm grateful for Ivo's approach.",
    testi_2_name: "Elena, 41, manager",
    testi_3_text: "After my work injury, I thought I'd never recover. With Ivo, I came back stronger than before.",
    testi_3_name: "Stefan, 29, construction worker",
    treatments_title: "Specialized Treatments",
    treat_1: "Sports Injuries",
    treat_2: "Chronic Back Pain",
    treat_3: "Post-Surgery Rehabilitation",
    treat_4: "Knee Problems",
    treat_5: "Posture Correction",
    treat_6: "Mobility for Older Adults",
    treat_7: "Performance Optimization",
    treat_8: "Trigger Point Therapy",
    why_title: "Why Choose Ivo?",
    why_1_title: "Personalized Approach",
    why_1_text: "No two treatments are the same. Every plan is built around your body.",
    why_2_title: "Root Cause Focus",
    why_2_text: "We don't just treat pain — we find why it's happening and fix that.",
    why_3_title: "Fast Results",
    why_3_text: "Most clients feel improvement in 2-3 sessions, not months.",
    about_title: "About Ivo Taleski",
    about_bio: "For 4 years, I've been helping people in Skopje move better and live pain-free. I combine modern physiotherapy techniques with deep understanding of how your body actually works.",
    cred_1: "Graduate Physiotherapist",
    cred_2: "Master's in Sports Rehabilitation",
    cred_3: "Trained in Manual Therapy",
    cred_4: "4+ Years Clinical Experience",
    process_title: "How It Works?",
    process_1_title: "Free Consultation",
    process_1_text: "We discuss your pain, history, and goals. No commitment.",
    process_2_title: "Detailed Assessment",
    process_2_text: "I perform thorough physical assessment to find the root cause.",
    process_3_title: "Personalized Plan",
    process_3_text: "Together we create a plan that fits your life and delivers results.",
    visit_title: "Contact Us",
    address: "Skopje, Macedonia",
    final_cta_title: "Ready to Move Without Pain?",
    final_cta_text: "Book a free 20-minute consultation.",
    final_cta_btn: "Book Now",
    footer_created_by: "Created by fs digital.mk",
  },
} as const;

type TranslationKey = keyof typeof translations.mk;

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    return saved === "en" ? "en" : "mk";
  });

  const toggleLang = () => {
    const next = lang === "mk" ? "en" : "mk";
    setLang(next);
    localStorage.setItem("lang", next);
    document.documentElement.lang = next;
  };

  const t = (key: TranslationKey) => translations[lang][key] || key;

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
