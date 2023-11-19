<template>
  <main>
    <ContentDoc :path="$route.path">
      <template v-slot="{ doc }">  
        {{ new Date(doc.date).toLocaleString('de-DE', {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}) }} Tags: <span v-for="tag in doc.tags" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ tag}} </span>
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </template>
      <template #not-found> <h1>Document not found</h1> </template>
    </ContentDoc>
  </main>
</template>
