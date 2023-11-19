<template>
  <NuxtLayout>
  <main>
    <div class="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2">
      <div class="p-10 col-span-4 rounded overflow-hidden shadow-md">
    <ContentDoc :path="$route.path">
      <template v-slot="{ doc }">  
        {{ new Date(doc.date).toLocaleString('en-US') }} Tags: <span v-for="tag in doc.tags" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ tag}} </span>
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </template>
      <template #not-found> <h1>Document not found</h1> </template>
    </ContentDoc>
    </div>
    </div>
  </main>
  </NuxtLayout>
</template>
