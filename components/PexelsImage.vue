<script setup>
import { reactive, toRefs, ref } from "vue";

const props = defineProps({
  photoid: {
    type: String
  }
})

const { photoid } = toRefs(props,'photoid')
console.log("lalala", photoid.value)

const { data: photo } = await useFetch(() => `https://api.pexels.com/v1/photos/${photoid.value}`,
                                     { headers: { 'Authorization': '' },
                                       default: () =>  {
                                         return { src: { small: "https://images.pexels.com/photos/4905078/pexels-photo-4905078.jpeg?auto=compress&cs=tinysrgb&h=130" }}}
                                     });

</script>

<template>
<div>
  <img class="w-full" :src="photo.src.small"/>
</div>
</template>
