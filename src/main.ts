import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import en from "./assets/i18n/en.json";
import zh from "./assets/i18n/zh-tw.json";
import ja from "./assets/i18n/ja.json";

const i18n = createI18n({
  legacy: false,
  locale: "en-US",
  fallbackLocale: "en-US",
  globalInjection: true,
  messages: {
    "zh-TW": zh,
    "en-US": en,
    ja: ja,
  },
});

const app = createApp(App);

app.use(i18n);
app.mount("#app");
