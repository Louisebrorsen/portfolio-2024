<template>
    <header :class="{'sticky': !scrolled, 'top-0': !scrolled, 'bg-green': !scrolled, 'shadow-lg': !scrolled}" class="transition-all duration-300 ease-in-out">
      <nav class="container flex flex-col sm:flex-row items-center gap-4 py-6">
        <router-link to="/" class="flex items-center gap-3 flex-1">
        <img class="md:max-h-20 h-auto" src="../assets/img/logo/logo-03.png" alt="">
      </router-link>
        <div class="flex flex-row gap-4">
          <router-link to="/" class="text-m font-semibold leading-6 text-black">Forside</router-link>
          <router-link to="/about" class="text-m font-semibold leading-6 text-black">Omkring</router-link>
          <router-link to="/portfolio" class="text-m font-semibold leading-6 text-black">Portfolio</router-link>
          <router-link to="/kontakt" class="text-m font-semibold leading-6 text-black">Kontakt</router-link>
        </div>
      </nav>
    </header>

  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const scrolled = ref(false);
  
  const handleScroll = () => {
    scrolled.value = window.scrollY > 0;
  }
  
  // Listen to scroll events
  window.addEventListener('scroll', handleScroll);
  
  // Initially check scroll position
  handleScroll();
  </script>
  
  <style>
  .sticky {
    position: sticky;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter-active, .fade-leave-active {
    opacity: 0;
  }
  h1 {
    text-shadow: 2px 2px 4px #000000; /* Juster værdierne efter ønske */
    }
  </style>
  