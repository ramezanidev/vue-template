import { createI18n } from "vue-i18n";
import en from "./locales/en";
import fa from "./locales/fa";

export const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  legacy: false,
  messages: {
    en,
    fa,
  },
});
