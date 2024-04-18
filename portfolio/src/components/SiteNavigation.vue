<template>
  <header :class="{'sticky': !scrolled, 'top-0': !scrolled, 'bg-green': !scrolled, 'shadow-lg': !scrolled}" class="transition-all duration-300 ease-in-out">
    <nav class="container flex flex-col sm:flex-row items-center gap-4 py-6">
      <router-link to="/" class="flex items-center gap-3 flex-1">
        <img class="md:max-h-20 h-auto" src="../assets/img/logo/logo-03.png" alt="">
      </router-link>
      <!-- Burger menu button -->
      <button @click.stop="toggleBurgerMenu" class="block sm:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <!-- Burger menu -->
      <div v-show="burgerMenuOpen" class="sm:hidden">
        <router-link to="/" class="text-m font-semibold leading-6 text-black block">Forside</router-link>
        <router-link to="/about" class="text-m font-semibold leading-6 text-black block">Om mig</router-link>
        <router-link to="/portfolio" class="text-m font-semibold leading-6 text-black block">Portfolio</router-link>
      </div>
      <!-- Regular menu -->
      <div class="flex flex-row gap-4 hidden sm:flex">
        <router-link to="/" class="text-m font-semibold leading-6 text-black">Forside</router-link>
        <router-link to="/about" class="text-m font-semibold leading-6 text-black">Om mig</router-link>
        <router-link to="/portfolio" class="text-m font-semibold leading-6 text-black">Portfolio</router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const scrolled = ref(false);
const burgerMenuOpen = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 0;
}

const toggleBurgerMenu = () => {
  burgerMenuOpen.value = !burgerMenuOpen.value;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 0;
}

h1 {
  text-shadow: 2px 2px 4px #000000;
  /* Juster værdierne efter ønske */
}
</style>
