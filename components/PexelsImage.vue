<script setup lang="ts">
import { reactive, toRefs, ref } from "vue";
const appUrl = useRuntimeConfig();

export interface Props {
  photoid?: Number;
  staticHeader?: String;
}

const props = withDefaults(defineProps<Props>(), {
  photoid: 4905078,
});

const cardImageURL = () => {
  if (props.staticHeader) {
    return new URL(
      `/img/staticHeaders/${props.staticHeader}`,
      appUrl.public.appUrl,
    ).href;
  }
};
</script>

<template>
  <div class="cardimg">
    <img v-if="props.staticHeader" :src="cardImageURL(props.staticHeader)" />
  </div>
</template>

<style>
.cardimg {
  width: 100%;
  position: relative;
}

.cardimg .copyright {
  position: absolute;
  height: auto;
  bottom: 24px;
  right: 5px;
  margin-right: 5px;
}
</style>
