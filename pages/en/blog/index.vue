<template>
  <main class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg lg:max-w-7-xl">
      <h2 class="text-3xl font-semibold tracking-tight">Recent posts</h2>
      
    </div>
    <div class="mt-12 grid gap-16 lg:grid-cols-3 lg:gab-x-5">
      <ContentList path="/en/blog" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <NuxtLink :href="article._path">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <PexelsImage :photoid="article.photoid"/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ article.title }}</div>
              <p class="text-gray-700 text-base">
                {{ article.description}}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span v-for="tag in article.tags" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ tag}} </span>
            </div>
          </div>
          </NuxtLink>
        </div>
      </ContentList>
    </div>
  </main>
</template>
