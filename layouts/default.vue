<template>
<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink v-slot="{ isActive }" activeClass="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" :to="{ path: language+'/blog' }" class="active:bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
            <img class="hidden lg:block h-8 w-auto" src="~/assets/img/CULogo.svg" alt="Workflow">
          </NuxtLink>
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <NuxtLink v-slot="{ isActive }" activeClass="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" :to="{ path: language+'/about' }" class="active:bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">{{ currentLanguage() == "DE" ? "Über mich" : "About"}}</NuxtLink>
            <NuxtLink v-slot="{ isActive }" activeClass="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" :to="{ path: language+'/legal' }" class="active:bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">{{ currentLanguage() == "DE" ? "Impressum" : "Legal notice"}}</NuxtLink>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">        
        <button class="text-white" @click="toggleLanguage">{{ currentLanguage() == "DE" ? "EN" : "DE" }}</button>
      </div>
    </div>
  </div>
</nav>
<main class="col-span-8">
	<slot/>
</main>
</template>

<script setup>
const { language, currentLanguage, toggleLanguage } = useLanguage()
</script>
