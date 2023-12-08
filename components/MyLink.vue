<template>
  <NuxtLink :to="to" class="my-link"><slot></slot></NuxtLink>
</template>
<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  }
});
</script>
<style scoped>
.my-link {
  @apply text-white;
text-decoration: none;
margin-left: 10px;
}
.my-link:hover {
    @apply text-blue-200;
text-decoration: none;
margin-left: 10px;
}
.my-link:visited {
@apply text-white;
    text-decoration: none;
margin-left: 10px;
}


</style>
