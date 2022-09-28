<template>
  <div>
    <div class="mx-auto max-w-lg lg:max-w-7-xl">
      <h1 class="py-5 text-3xl font-bold tracking-tight">Recent posts</h1>
    </div>
    <div class="mt-12 grid gap-16 lg:grid-cols-3 lg:gab-x-5">
      <ContentList path="/de/blog" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <NuxtLink :href="article._path">
            
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <PexelsImage :photoid="article.photoid" :staticHeader="article.staticHeader" />
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
  </div>
</template>

