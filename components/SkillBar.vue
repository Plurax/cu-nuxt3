<script setup>
import { reactive, toRefs, ref } from "vue";

const props = defineProps({
  name: {
    type: String
  },
  value: {
    type: String
  }
})
</script>

<template>
<div class="p-5 container">
  <div class="skill-name"><slot/></div>
  <div class="skill-bar">
    <div class="bar"></div>
  </div>
</div>
</template>

<style scoped>
.container {
    display: block;
    float: left;
  width: 150px;
}

.container .skill-bar {
    width: 100%;
    background: gray;
    border-radius: 5px;
}

.container .skill-bar .bar {
    max-width: v-bind(props.value);
    background: #0aa;
    height: 15px;
    border-radius: 5px;
}
</style>
