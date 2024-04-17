<template>
  <hero>
        <h1 class="text-6xl font-bold  text-center text-green">Kort introduktion </h1>
      <div class="container columns-2 py-10 ">
        <div class="div ">
          <div class=" flex py-6 items-center justify-center ">
          <img class="h-60 sm:h-80 rounded-full" src="../assets/img/mig.jpg" alt="">
          </div>

        </div>
        <h2 class="text-2xl font-bold text-left py-5">
          Hej! 
        </h2>
        <h3 class="text-xl font-semibold text-left py-5">
          Jeg hedder Louise Norman Brorsen   
        </h3>
        <p class="text-left">
          Jeg er en dedikeret kreativ designer, med en passion for kvalitet.
          Jeg besidder en stærk faglig baggrund inden for grafisk design med erfaring inden for både print og digitalt medie. 
          Gennem mine tidligere projekter har jeg demonstreret mine evner inden for brandidentitet, layoutdesign, og brugercentreret design. 
          Jeg er fortrolig med en bred vifte af designværktøjer og software, og jeg holder mig konstant opdateret 
          med de nyeste trends og teknologier inden for grafisk design.
        </p>
      </div>
  </hero>

  <section class="bg-green">
    <div class="container py-6">
      <h2 class="text-4xl font-bold text-center py-8">Mit cv</h2>
      <div class="container columns-2 py-10 ">
        <div class="div ">
          <div class=" flex py-6 items-center justify-center ">
           <p>her kommer pdf til at være</p>
           <button class="btn"> Mit CV <Icon icon="material-symbols-light:download-rounded" /></button>
          </div>

        </div>
        <h2 class="text-2xl font-bold text-left py-5">
          mit video cv   
        </h2>
        <p class="text-left">
          Her kommer video cv til at være
        </p>
      </div>
      
    </div>
  </section>

  <section class="bg-white">
    <div class="container py-6">
      <h2 class="text-4xl font-bold text-center py-8">Mine kompetencer</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card flex flex-col items-center">
          <img class="size-52 rounded" src="../assets/img/coding.png" alt="">
          <div class="card-body">
            <h3 class="text-2xl font-bold">Design og udvikling</h3>
            <p class="text-center">Design og udvikling af websites, der er brugervenlige og responsive.</p>
          </div>
        </div>
        <div class="card flex flex-col items-center">
          <img class="size-52 rounded" src="../assets/img/curve.png" alt="">
          <div class="card-body">
            <h3 class="text-2xl font-bold">Grafiske elementer</h3>
            <p class="text-center">Design og produktion af grafiske elementer til visuel præsentation</p>
          </div>
        </div>
        <div class="card flex flex-col items-center">
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

</script>

<style scoped>

</style>