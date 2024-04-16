<template>
    <section class="bg-white">
        <div class="container">
            <h1 class="text-4xl font-bold text-center text-green py-8">Portfolio</h1>
            <p class="text-center">Min erfaring spænder over mange digitale medieområder. Under mine studier har jeg haft privilegiet at arbejde på en række forskellige projekter. 
                Gennem disse har jeg opnået ekspertise i at arbejde effektivt både individuelt og i et team, med fokus på detaljer og overholdelse af stramme tidsplaner.</p>
            <div class="flex justify-center flex-wrap">
                <div class="max-w-3xl py-6">
                    <ul class="mb-0 flex list-none flex-row flex-wrap rounded-full border border-green bg-white px-1.5 py-1.5 shadow-xl">
                        <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                            <button @click="selectedCategory =''" class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer text-blue bg-white"> Alle </button>
                        </li>
                        <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                            <button @click="selectedCategory ='web'" class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer text-blue bg-white"> Design og webudvikling </button>
                        </li>
                        <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                            <button @click="selectedCategory ='ccge'" class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer text-blue bg-white"> CC - grafiske elementer </button>
                        </li>
                        <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                            <button @click="selectedCategory ='ccvf'" class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer text-blue bg-white"> CC - video og foto </button>
                        </li>
                        <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                            <button @click="selectedCategory ='project'" class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer text-blue bg-white"> Projekter </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <main>
        <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem.id">
                <div class="project-container flex flex-row">
                    <div class="project-image">
                        <img :src="portfolioItem.image" alt="">
                    </div>

                    <div class="project-text">
                        <h2>{{ portfolioItem.title }}</h2>
                        <p>{{ portfolioItem.description }}</p>
                        <div v-if="portfolioItem.link">
                            <a :href="portfolioItem.link">Link</a>
                        </div>
                        <router-link :to="`/portfoliodetail/${portfolioItem.id}`"> <!-- : gør at den vil ændre sig afhængigt af hvilket produkt -->
                        Go to portfolio item
                    </router-link>
                    </div>
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

<style scoped>
.main {
    display: flex;
    justify-content: center; /* Centrerer indholdet vandret */
    align-items: center; /* Centrerer indholdet lodret */
    margin: 0; /* Fjerner den standardmargin, der anvendes af browseren */
    padding: 0; /* Fjerner den standardpadding, der anvendes af browseren */
}

/* Stilarter for dine projekter forbliver uændrede */
.project-container {
    display: flex;
    justify-content: center; /* Centrerer indholdet vandret */
    align-items: center;
    margin-bottom: 20px;
}

.project-image {
    flex: 0 0 auto; /* Billedecontaineren beholder sin oprindelige størrelse */
    margin-right: 20px;
}

.project-text {
    flex: 1; /* Tekstcontaineren strækker sig for at fylde resten af pladsen */
}

.project-image img {
/*     width: 100%; /* Billedet fylder sin container vandret */
    max-height: 300px; /* Juster maksimalhøjden efter behov */
    object-fit: cover;
    border-radius: 10px;
}

</style>