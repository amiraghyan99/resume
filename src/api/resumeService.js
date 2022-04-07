import enData from "../../resume/en-data.yaml";
import ruData from "../../resume/ru-data.yaml";
import hyData from "../../resume/hy-data.yaml";

export const languages = [
  {
    name: "English",
    code: "en",
    data: enData,
    resumeLabels: {
      contacts: "Contacts",
      profile: "Profile",
      skills: "Skills",
      experience: "Experience",
      professional: "Professional",
      education: "Education",
    },
  },
  {
    name: "Русский",
    code: "ru",
    data: ruData,
    resumeLabels: {
      contacts: "Контакты",
      profile: "Профиль",
      skills: "Навыки",
      experience: "Опыт работы",
      professional: "Профессиональные",
      education: "Образование",
    },
  },
  {
    name: "Հայերեն",
    code: "hy",
    data: hyData,
    resumeLabels: {
      contacts: "Կոնտակտներ",
      profile: "Պրոֆիլ",
      skills: "Հմտություններ",
      experience: "Փորձ",
      professional: "Պրոֆեսիոնալ",
      education: "Կրթությունը",
    },
  },
];

export function getCurrentLanguage() {
  return languages[2];
}

export function getLanguages() {
  return languages;
}
