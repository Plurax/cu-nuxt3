<template>
<div class="container">
  <div class="relative flex items-center justify-between m-0">
    <span class="text-white mx-2 text-left">
      {{ filename ? filename : " " }}
    </span>
    <div class="text-right mx-10">
      <span class="text-white copied-text text-right" v-if="copied">Copied</span>
      <button class="text-right" @click="copy(code)"><Icon class="w-4 m-2 text-white" aria-hidden="true" name="heroicons-outline:clipboard-copy"/></button>
    </div>
      <span
        v-if="languageText"
        :style="{ background: languageBackground, color: languageColor }"
        class="language-text"
        >
        {{ languageText }}
      </span>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core';
const { copy, copied, text } = useClipboard();
const props = withDefaults(
  defineProps<{
    code?: string;
    language?: string | null;
    filename?: string | null;
    highlights?: Array<number>;
  }>(),
  { code: '', language: null, filename: null, highlights: [] }
);
const languageMap: Record<
  string,
  { text: string; color: string; background: string }
> = {
  vue: {
    text: 'vue',
    background: '#42b883',
    color: 'white',
  },
  js: {
    text: 'js',
    background: '#f7df1e',
    color: 'black',
  },
};
const languageText = computed(() =>
  props.language ? languageMap[props.language]?.text : null
);
const languageBackground = computed(() =>
  props.language ? languageMap[props.language]?.background : null
);
const languageColor = computed(() =>
  props.language ? languageMap[props.language]?.color : null
);
</script>

<style scoped>
.container {
  background: #1e1e1e;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-top: 0em;
  overflow: hidden;
  border-radius: 0.5rem;
}
.copied-text {
margin-right: 1em;
}
.filename-text  {
  position: absolute;
  top: 0;
  left: 1em;
  padding: 0.25em 0.5em;
  color: white;
  font-size: 14px;
}
.language-text  {
  position: absolute;
  top: 0;
  right: 1em;
  padding: 0.25em 0.5em;
  font-size: 14px;
  text-transform: uppercase;
  border-bottom-right-radius: 0.25em;
  border-bottom-left-radius: 0.25em;
}
:slotted(pre) {
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  flex: 1 1 0%;
  overflow-x: auto;
  padding: 1rem;
  line-height: 1.625;
  counter-reset: lines;
}
:slotted(pre code) {
  width: 100%;
  display: flex;
  flex-direction: column;
}
:slotted(pre code .line) {
  display: inline-table;
  min-height: 1rem;
}
:slotted(pre code .line::before) {
  counter-increment: lines;
  content: counter(lines);
  width: 1rem;
  margin-right: 1.5rem;
  display: inline-block;
  text-align: left;
  color: rgba(115, 138, 148, 0.4);
}
:slotted(pre code .highlight) {
  background-color: #363b46;
  display: block;
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  border-left: 0.25em solid red;
}
</style>
