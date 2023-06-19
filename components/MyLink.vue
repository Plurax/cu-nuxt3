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
  @apply text-blue-600;
    text-decoration: none;
}
.my-link:hover {
    @apply text-blue-600;
    text-decoration: none;
}
.my-link:visited {
@apply text-blue-600;
    text-decoration: none;
}


</style>
