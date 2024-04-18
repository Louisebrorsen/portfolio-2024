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
      <button class="btn" id="mitcv-btn" @click="openCV"> Mit CV  <Icon icon="material-symbols-light:download-rounded" /> </button>

    </div>
  </hero>

  <section class="bg-green">
    <div class="container py-6">
      <h2 class="text-4xl font-bold text-center py-8">Mine kompetencer</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card2 flex flex-col items-center">
          <img class="size-52 rounded" src="../assets/img/coding.png" alt="">
          <div class="card-body">
            <h3 class="text-2xl font-bold">Design og udvikling</h3>
            <p class="text-center">Design og udvikling af websites, der er brugervenlige og responsive.</p>
          </div>
        </div>
        <div class="card2 flex flex-col items-center">
          <img class="size-52 rounded" src="../assets/img/curve.png" alt="">
          <div class="card-body">
            <h3 class="text-2xl font-bold">Grafiske elementer</h3>
            <p class="text-center">Design og produktion af grafiske elementer til visuel præsentation</p>
          </div>
        </div>
        <div class="card2 flex flex-col items-center">
          <img class="size-52 rounded" src="../assets/img/content-creator.png" alt="">
          <div class="card-body">
            <h3 class="text-2xl font-bold">Foto og video</h3>
            <p class="text-center">Redigering af billeder og videoer, og indsætte effekter. </p>  
          </div>
        </div>
      </div>
    </div> 
  </section>

</template>

<script setup>
import { Icon } from '@iconify/vue';
const pdfURL = 'https://firebasestorage.googleapis.com/v0/b/portfolio-louisebrorsen.appspot.com/o/cv.pdf?alt=media&token=b3bf64a5-5330-4344-b49b-fa4eceee4071'
const openCV = () => {
  // Åbn CV i et nyt vindue
  window.open(pdfURL);
  // Eller åbn CV i samme fane
  // window.location.href = pdfURL;
}
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 350px; /* Juster højden efter behov */
}

.card img {
  max-width: 200px; /* Juster størrelsen efter behov */
  max-height: 100px;
}
.card2 img {
  max-width: 100px; /* Juster størrelsen efter behov */
  max-height: 100px;
}

.card-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#mitcv-btn {
  display: flex;
  align-items: center;
}
</style>
