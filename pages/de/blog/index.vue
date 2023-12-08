<script setup>
definePageMeta({ documentDriven: { page: false, surround: false  } });

import { queryContent, useAsyncData, useRoute } from "#imports";

const route = useRoute();
const {data: articles, pending} = await useAsyncData(
  route.fullPath,
  () => queryContent('de','blog')
    .sort({
      date: -1,
      $numeric: true,
    })
    .find()
);
</script>

<template>
<NuxtLayout>
  <div>
    <div class="mt-12 grid gap-16 lg:grid-cols-3 lg:gab-x-5">
        <div v-for="article in articles" :key="article._path">
          <NuxtLink :href="article._path">
            
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <PexelsImage :photoid="article.photoid" :staticHeader="article.staticHeader" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ article.title }}
              </div>
              <span class="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{{ new Date(article.date).toLocaleDateString("de-DE")}}</span>
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
    </div>
    </div>
</NuxtLayout>
</template>

