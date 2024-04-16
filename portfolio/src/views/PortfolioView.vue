<template>
    <section class="bg-white">
      <div class="container">
        <h1 class="text-4xl font-bold text-center text-green py-8">Portfolio</h1>
        <p class="text-center">Min erfaring spænder over mange digitale medieområder. Under mine studier har jeg haft privilegiet at arbejde på en række forskellige projekter. Gennem disse har jeg opnået ekspertise i at arbejde effektivt både individuelt og i et team, med fokus på detaljer og overholdelse af stramme tidsplaner.</p>
        <div class="flex justify-center flex-wrap">
          <div class="max-w-3xl py-6">
            <ul class="mb-0 flex list-none flex-row flex-wrap rounded-full border border-green bg-white px-1.5 py-1.5 shadow-xl">
              <li v-for="(button, index) in buttons" :key="index" :class="{ '-mb-px': !last, 'mr-2': !last, 'flex-auto': !last, 'text-center': !last, 'last:mr-0': last }" :last="index === buttons.length - 1">
                <button @click="setSelectedCategory(button.category)" :class="{ 'active': button.category === selectedCategory }" class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer text-blue bg-white">{{ button.text }}</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  
    <main class="main">
      <div class="project-card-grid">
        <div class="project-card" v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem.id">
          <div class="card">
            <div class="card-image">
              <img :src="portfolioItem.image" alt="">
            </div>
            <div class="card-content">
              <h2 class="font-semibold">{{ portfolioItem.title }}</h2>
              <p>
                Beskrivelse: {{ portfolioItem.description }}
              </p>
              <div v-if="portfolioItem.link">
                <a :href="portfolioItem.link">Link</a>
              </div>
              <router-link :to="'/PortfolioDetailView.vue/' + portfolioItem.id">
                <button class="btn2">Se mere</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import getPortfolio from '@/modules/getPortfolio'
  
  const { portfolioItems } = getPortfolio() 
  
  const selectedCategory = ref('')
  
  const setSelectedCategory = (category) => {
    selectedCategory.value = category;
  }
  
  const buttons = [
    { category: '', text: 'Alle' },
    { category: 'web', text: 'Design og webudvikling' },
    { category: 'ccge', text: 'CC - grafiske elementer' },
    { category: 'ccvf', text: 'CC - video og foto' },
    { category: 'project', text: 'Projekter' }
  ];
  
  const filteredPortfolioItems = computed(() => {
    if (!selectedCategory.value) {
      return portfolioItems.value;
    } else {
      return portfolioItems.value.filter(item => item.category === selectedCategory.value);
    }
  });
  </script>
  
  <style scoped>
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .project-card-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 kort pr. række */
    gap: 20px; /* Afstand mellem kortene */
  }
  
  @media (max-width: 768px) {
    .project-card-grid {
      grid-template-columns: repeat(2, 1fr); /* 2 kort pr. række på mindre skærme */
    }
  }
  
  .project-card {
    margin-bottom: 20px;
  }
  
  .card {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .card-image {
    max-height: 200px;
    overflow: hidden;
  }
  
  .card-image img {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 20px;
    text-align: center;
  }
  
  .active {
    background-color: #CCD5C6;
    color: white;
  }
  </style>
  