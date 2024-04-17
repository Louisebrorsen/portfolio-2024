<template>
  <div>

    <hero class="bg-gray-100 py-20">
      <div class="container py-10">
        <h1 class="text-6xl font-bold text-center text-green mb-4">Kort introduktion</h1>
        <div class="flex justify-center">
          <img class="h-60 sm:h-80 rounded-full" src="../assets/img/mig.jpg" alt="Louise Brorsen">
        </div>
        <h2 class="text-2xl font-bold text-center py-2">Hej!</h2>
        <h3 class="text-xl font-semibold text-center py-1">Jeg hedder Louise Norman Brorsen</h3>
        <p class="text-left">Jeg er en dedikeret kreativ designer, med en passion for kvalitet. Jeg besidder en stærk faglig baggrund inden for grafisk design med erfaring inden for både print og digitalt medie. Gennem mine tidligere projekter har jeg demonstreret mine evner inden for brandidentitet, layoutdesign, og brugercentreret design. Jeg er fortrolig med en bred vifte af designværktøjer og software, og jeg holder mig konstant opdateret med de nyeste trends og teknologier inden for grafisk design.</p>
      </div>
    </hero>

    <section class="bg-green">
      <div class="container py-6">
        <h2 class="text-4xl font-bold text-center py-8">Mit CV</h2>
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex py-6 items-center justify-center">
            <p>Her kommer pdf til at være</p>
            <button class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Mit CV
              <Icon icon="material-symbols-light:download-rounded" />
            </button>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-left py-5">Mit video cv</h2>
            <p class="text-left">Her kommer video cv til at være</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container py-6">
        <h2 class="text-4xl font-bold text-center py-8">Mine kompetencer</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card-s bg-gray-200 shadow-md rounded-lg overflow-hidden">
            <div class="card-s__content p-6">
              <p class="card-s__title font-bold text-xl mb-2">Mine skills</p>
              <p class="card-s__description">Bevæg musen over og se hvilke apps jeg har erfaring med at benytte.</p>
            </div>
            <img src="../assets/img/skils.png" alt="">
          </div>
          <div class="card-s bg-gray-200 shadow-md rounded-lg overflow-hidden">
            <div class="card-s__content p-6">
              <p class="card-s__title font-bold text-xl mb-2">5 ord omkring mig</p>
              <p class="card-s__description">Bevæg musen over for at se hvilke 5 keywords der vil beskrive mig</p>
            </div>
            <img src="../assets/img/keywords.png" alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
.grid {
  display: grid;
  gap: 10px;
  justify-items: center;
}

.card-s {
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 200px;
  background-color: #ccd5c6;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card-s:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card-s__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #ccd5c6;
  transform: rotateX(0deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card-s__title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.card-s__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
}

.card-s img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: rotateX(-90deg);
}

.card-s:hover img {
  transform: rotateX(0deg);
}

</style>

