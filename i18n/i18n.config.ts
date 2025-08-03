import fr from "./locales/fr.json";
import en from "./locales/en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    fr: fr,
    en: en,

  },
  // baseUrl: url// not working from here
}));
