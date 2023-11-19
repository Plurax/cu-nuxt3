<template>
<NuxtLayout>
  <div class="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2">
    <div class="p-10 col-span-4 rounded overflow-hidden shadow-md">
  <main>
<ContentDoc v-slot="{ doc }">
  <article>
    {{ new Date(doc.date).toLocaleString('de-DE', {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}) }} Tags: <span v-for="tag in doc.tags" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ tag}} </span>
    <h1>{{ doc.title }}</h1>
    <ContentRenderer :value="doc" />
  </article>
</ContentDoc>
</main>
</div>
</div>
</NuxtLayout>
</template>
