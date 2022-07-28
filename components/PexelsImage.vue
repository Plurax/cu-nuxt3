<script setup lang="ts">
import { reactive, toRefs, ref } from "vue";
const config = useRuntimeConfig();

export interface Props {
  photoid?: Number
}

const props = withDefaults(defineProps<Props>(), {
  photoid: 4905078,
})


const { data: photo } = await useFetch(() => `https://api.pexels.com/v1/photos/${props.photoid}`,
{ headers: { 'Authorization': config.PEXELS_KEY },
default: () =>  {
return { src: { small: "https://images.pexels.com/photos/4905078/pexels-photo-4905078.jpeg?auto=compress&cs=tinysrgb&h=130" }, photographer: "Horst"}}});

</script>

<template>
<div class="cardimg">
  <img class="w-full" :src="photo.src.small"/>
  <span to="https://www.pexels.com" class="text-xs bg-slate-900 text-white rounded-sm copyright">{{ photo.photographer }} (Pexels)</span>
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
