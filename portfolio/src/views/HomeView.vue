<template>
  <hero>
      <div class="container py-10 ">
          <h1 class="text-6xl font-bold underline text-center text-green">Velkommen</h1>
          <h2 class="text-2xl font-bold text-center py-5">Jeg er en grafisk designer <br> Engageret og Kreativ </h2>
          <p class="text-center">Jeg hedder <span class="underline md:decoration-2 decoration-green">Louise Brorsen</span>.
              Jeg er en dedikeret kreativ designer, med en passion for kvalitet. <br>
              Jeg er målrettet for at lave originale elementer, og tilpasse kundernes behov.
          </p>
      </div>
      <div class="container flex py-6 items-center justify-center ">
          <img class="h-60 sm:h-80 rounded" src="../assets/img/mig.jpg" alt="">
      </div>
      <div class="flex flex-row items-center justify-center py-6 gap-x-6">
          <button class="btn"> Om mig </button>
          <button class="btn"> Mit CV </button>
      </div>

  </hero>

  <section class="bg-green">
      <div class="container py-6 flexbox ">
          <h2 class="text-4xl font-bold text-center py-8">Mine kompetencer</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="card">
                  <img class="size-52 rounded" src="../assets/img/coding.svg" alt="">
                  <div class="card-body">
                      <h3 class="text-2xl font-bold">Design og udvilking</h3>
                      <p>Design og udvikling af websites, der er brugervenlige og responsive.</p>
                  </div>
              </div>
              <div class="card">
                  <img class="size-52 rounded" src="../assets/img/content-creation.svg" alt="">
                  <div class="card-body">
                      <h3 class="text-2xl font-bold">Content creation - grafiske elementer</h3>
                      <p>Design og producering af gafiske elementer til visuel præsentation </p>
                  </div>
              </div>
              <div class="card">
                  <img class="size-52 rounded" src="../assets/img/content-creator.svg" alt="">
                  <div class="card-body">
                      <h3 class="text-2xl font-bold">Content creation - video og foto</h3>
                      <p>Billeder og videoer som er redigeret</p>  
                  </div>
              </div>
          </div>
      </div> 
  </section>
</template>
<script setup>
 
</script>
<style>


  .card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  text-align: center; 
  align-content: center;
  }
 

</style>
