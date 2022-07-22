<script setup>
import { reactive, toRefs, ref } from "vue";
const config = useRuntimeConfig();

const props = defineProps({
  photoid: {
    type: Number
  },
})

const { photoid } = toRefs(props,'photoid')
const { data: photo } = await useFetch(() => `https://api.pexels.com/v1/photos/${photoid.value}`,
                                     { headers: { 'Authorization': config.PEXELS_KEY },
                                       default: () =>  {
                                         return { src: { small: "https://images.pexels.com/photos/4905078/pexels-photo-4905078.jpeg?auto=compress&cs=tinysrgb&h=130" }}}
                                     });

</script>

<template>
<div>
  <img class="w-full cardimg" :src="photo.src.small"/>
  <button to="https://www.pexels.com" class="text-xs bg-slate-900 text-white rounded-sm copyright">{{ photo.photographer }} (Pexels)</button>
</div>
</template>


<style>
  .cardimg {
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  *, *:before, *:after {
  box-sizing: inherit;
  }
  vertical-align: middle;
  }
  
.copyright {
  position: relative;
  height:auto;
  bottom:24px;
  right: 5px;
  width: fit-content;
  margin-right: 5px;
  display: block;
  *, *:before, *:after {
    box-sizing: inherit;
  }
}
</style>
