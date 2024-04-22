<template>
<div id="icons">
    <a class="mr-4 text-2xl" v-for="link in socialLinks" :key="link.name" :href="link.url" target="blank">
        <font-awesome-icon :icon="['fab', link.icon]" />
    </a>
</div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const socialLinks = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/christoph-uhlich',
        icon: 'linkedin'

    },
    {
        name: 'GitHub',
        url: 'https://www.github.com/plurax',
        icon: 'github-square'
    }

]
</script>
