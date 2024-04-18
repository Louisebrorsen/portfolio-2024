<template>
    <div class="container">
      <div v-if="specificPortfolioItem" class="grid">
        <div class="left-column">
          <h1 class="text-4xl font-bold text-center py-6 text-green">{{ specificPortfolioItem.title }}</h1>
          <div class="description">
            <p>{{ specificPortfolioItem.description }}</p>
          </div>
          <!-- Vis knappen "Gå til" hvis der er et link -->
          <div v-if="specificPortfolioItem.link" class="button-container">
            <button class="btn" @click="goToLink(specificPortfolioItem.link)">
              Gå til
            </button>
          </div>
          <!-- Vis knappen "Se PDF" hvis der er en PDF URL -->
          <div v-if="specificPortfolioItem.pdfURL" class="button-container">
            <a :href="specificPortfolioItem.pdfURL" target="_blank" class="btn">
              Se PDF
            </a>
          </div>
        </div>
        <div class="right-column">
          <img :src="specificPortfolioItem.image" alt="">
        </div>
      </div>
      <div v-else>
        <p class="text-lg text-center">Porteføljepunktet blev ikke fundet.</p>
      </div>
      <!-- Tilbageknap -->
      <router-link to="/portfolio" class="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
          <path fill="black" fill-rule="evenodd" d="m2.87 7.75l1.97 1.97a.75.75 0 1 1-1.06 1.06L.53 7.53L0 7l.53-.53l3.25-3.25a.75.75 0 0 1 1.06 1.06L2.87 6.25h9.88a3.25 3.25 0 0 1 0 6.5h-2a.75.75 0 0 1 0-1.5h2a1.75 1.75 0 1 0 0-3.5z" clip-rule="evenodd" />
        </svg>
        <span class="back-text">Tilbage</span>
      </router-link>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import getPortfolio from '@/modules/getPortfolio'
  
  const { portfolioItems } = getPortfolio()
  const route = useRoute()
  const id = ref(route.params.id)
  const specificPortfolioItem = portfolioItems.value.find(item => item.id == id.value)
  
  const goToLink = (link) => {
    window.location.href = link;
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; /* Ændret til lodret layout */
    height: 100vh;
    position: relative; /* Tilføjet position: relative; for at positionere tilbageknappen */
  }
  
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px; /* Juster afstanden mellem kolonnerne efter behov */
  }
  
  .left-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .right-column {
    display: flex;
    justify-content: center; /* Centrerer indholdet vandret */
    align-items: center; /* Centrerer indholdet lodret */
  }
  
  .right-column img {
    max-width: 300px; /* Sørg for, at billedet ikke overstiger bredden af sin container */
    height: auto;
  }
  
  .description {
    margin-bottom: 20px;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
  }
  
  .back-button {
    display: inline-block; /* Ændret til inline-block */
    text-decoration: none; /* Fjern understregning fra tilbageknappen */
    position: fixed; /* Gør knappen fast positioneret */
    bottom: 40px;
    left: 45px;
    opacity: 0.4;
    transition: opacity 0.3s; /* Tilføj en overgangseffekt */
}

.back-button:hover {
  opacity: 1; /* Ved hover går opacity op til 100% */
}

.back-text {
  margin-left: 5px; /* Juster afstanden mellem teksten og ikonet */
}
  </style>
  