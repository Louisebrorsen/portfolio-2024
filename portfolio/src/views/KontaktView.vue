<template>
    <main>
      <h1 class="text-3xl font-bold underline">
        heeej
      </h1>
  
      <!-- Filter buttons -->
      <button @click="selectedCategory ='web'"> Web </button>
      <button @click="selectedCategory ='photo'"> Photo </button>
      <button @click="selectedCategory =''"> All </button>
  
      <!-- Portfolio card -->
      <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card">
        <router-link :to="`/portfoliodetail/${portfolioItem.id}`"> <!-- : gør at den vil ændre sig afhængigt af hvilket produkt -->
            Go to portfolio item
        </router-link>

        <h2>{{ portfolioItem.title }}</h2>
        <p>{{ portfolioItem.description }}</p>
        <p>{{ portfolioItem.id }}</p>
        <p :class="portfolioItem.category">{{ portfolioItem.category }}</p>
  
        <img :src="portfolioItem.image" alt="">
        <div v-if="portfolioItem.link">
          <a :href="portfolioItem.link">Link</a>
        </div>
        <div v-else>
  
        </div>
      </div>
    
    </main>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
    import getPortfolio from '@/modules/getPortfolio'
  
    const { portfolioItems } = getPortfolio() /* Giver adgang til at bruge data */
  
    let selectedCategory = ref ('')
  /* Value skal bruges hvis string er en ref */
  
    const filteredPortfolioItems = computed(()=>{
      if(selectedCategory.value == ''){
        return portfolioItems.value
      }
      else{
        return portfolioItems.value.filter(item => item.category == selectedCategory.value)
        /* Item.category filtrer kun på category, dette kunne også være .title eller andet der er på de forskellige id'er */
      }
    })
  
  </script>
    
  <style lang="scss">
  .card {
    color:#333;
    background-color: #f4f4f4;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .web {
    background-color: #af7012;
  }
  .photo {
    background-color: #f256e2;
  }
  </style>