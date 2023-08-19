import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import en from "./assets/i18n/en.json";
import zh from "./assets/i18n/zh-tw.json";

const i18n = createI18n({
  legacy: false,
  locale: "zh-TW",
  fallbackLocale: "zh-TW",
  globalInjection: true,
  messages: {
    "zh-TW": zh,
    "en-US": en,
  },
});

const app = createApp(App);

app.use(i18n);
app.mount("#app");
