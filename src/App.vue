<script setup lang="ts">
import { useI18n } from "vue-i18n";
import HelloWorld from "./components/HelloWorld.vue";
const { t, locale } = useI18n({ useScope: "global" });

const langList = [
  { key: "en", name: "English" },
  { key: "zh-TW", name: "繁體中文" },
  { key: "ja", name: "日本語" },
];

const handleChange = (event: Event) => {
  const eventTarget = event.target as HTMLSelectElement;
  locale.value = eventTarget.value;
};
</script>

<template>
  <select @change="handleChange">
    <option v-for="item in langList" :value="item.key">
      {{ item.name }}
    </option>
  </select>
  <div>
    {{ $t("hello") }}
    <span>{{ $t("sorry") }}</span>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
