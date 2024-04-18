<template>
  <div>

    <hero class="bg-gray-100 py-20">
      <div class="container py-10">
        <h1 class="text-6xl font-bold text-center py-2 text-green mb-4">Kort introduktion</h1>
        <div class="flex justify-center">
          <img class="h-60 sm:h-80 rounded-full py-2" src="../assets/img/mig.jpg" alt="Louise Brorsen">
        </div>
        <h2 class="text-2xl font-bold text-center pt-6 ">Hej!</h2>
        <h3 class="text-xl font-semibold text-left py-1">Jeg hedder Louise Norman Brorsen</h3>
        <p class="text-left">Jeg er en dedikeret kreativ designer, med en passion for kvalitet. Jeg besidder en stærk faglig baggrund inden for grafisk design med erfaring inden for både print og digitalt medie. Gennem mine tidligere projekter har jeg demonstreret mine evner inden for brandidentitet, layoutdesign, og brugercentreret design. Jeg er fortrolig med en bred vifte af designværktøjer og software, og jeg holder mig konstant opdateret med de nyeste trends og teknologier inden for grafisk design.</p>
      </div>
    </hero>

    <section class="bg-green">
      <div class="container py-6">
        <h2 class="text-4xl font-bold text-center py-8">Mit CV</h2>
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex py-6 items-center justify-center">
            <div class="pdf-container">
              <embed :src="pdfURL" type="application/pdf" width="100%" height="600px" />
            </div>
            <button class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Mit CV
              <Icon icon="material-symbols-light:download-rounded" />
            </button>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-left py-5">Mit video cv
            </h2>
            <iframe class="pb-4" width="560" height="315" src="https://www.youtube.com/embed/Eks1BUKrLKg?si=eBTv_Eeyzrpz_J1C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

    <section class="bg-green">
      <div class="container py-6">
        <h2 class="text-4xl font-bold text-center py-8">Kontakt</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-2xl font-bold text-left py-5">Skab forbindelse og samarbejde </h3>
                <p class="text-left"> 
                    Jeg er super åben for at chatte og arbejde sammen! <br>
                    Så hvis der er nogle spørgsmål, eller hvis I har lyst til at udforske nogle ideer sammen, så skal I ikke tøve med at kontakte mig. 
                    Jeg er altid klar til en god samtale og til at skabe noget fantastisk sammen. <br> Ser frem til at høre fra jer
                </p>
          </div>
          <div class="text-center">
              <h3 class="text-2xl font-bold text-left py-5">Kontakt mig på:</h3>
                <ul class=" content-center">
                  <li class="flex items-center py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                      <path fill="black" d="M12 10.8a2 2 0 1 0-2-2a2 2 0 0 0 2 2m-.71 6.91a1 1 0 0 0 1.42 0l4.09-4.1a6.79 6.79 0 1 0-9.6 0ZM7.23 8.34a4.81 4.81 0 0 1 2.13-3.55a4.81 4.81 0 0 1 5.28 0a4.82 4.82 0 0 1 .75 7.41L12 15.59L8.61 12.2a4.77 4.77 0 0 1-1.38-3.86M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2" />
                    </svg>
                    <p>Bramming, Esbjerg</p>
                  </li>
                  <li class="flex items-center py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <path fill="black" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
                    </svg>
                    <p>+45 21 95 50 72</p>
                  </li>
                  <li class="flex items-center py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 21 21">
                      <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m1.5 9l16-6.535L14.7 17zm16-6.5l-11 10m0 0v5l3-3" />
                    </svg>
                    <p>louisenb01@outlook.com</p>
                  </li>
                </ul>
            </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
const pdfURL = 'https://firebasestorage.googleapis.com/v0/b/portfolio-louisebrorsen.appspot.com/o/cv.pdf?alt=media&token=b3bf64a5-5330-4344-b49b-fa4eceee4071'
</script>

<style scoped>
.grid {
  display: grid;
  gap: 10px;
  justify-items: center;
  
}
pdf-container {
  text-align: center;
  max-width: 400px;
  height: 200px;
  padding-left: 40px;
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

.container ul {
    list-style-type: none;
    padding: 0;
}

.container li {
    display: flex;
    align-items: center;
}

.container svg {
    margin-right: 10px;
}

</style>

