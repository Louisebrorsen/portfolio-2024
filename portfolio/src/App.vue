<template>
  <div class="flex flex-col min-h-screen bg-white">
    


    <SiteNavigation/>
    <RouterView />
    <FooterView />
   

  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteNavigation from './components/SiteNavigation.vue'
import FooterView from './components/FooterView.vue';
</script>

<style lang="scss" scoped>

</style>