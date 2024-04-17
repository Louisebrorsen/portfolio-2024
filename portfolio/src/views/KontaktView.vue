<template>
  <section class="bg-white">
    <div class="container py-6">
      <div class="container columns-2 py-10 ">
        <div class="div ">
          <div class=" flex flex-col py-6 ">
            <h2 class="text-xl font-bold text-left py-8">Mine informationer</h2>
            <p class="text-left">
              Navn: Louise Norman Brorsen
            </p>
            <p>
              <iconify-icon icon="mdi:home"></iconify-icon>
            </p>
              <p>Email: louisenb01@outlook.com </p>
              <p> <Icon Icon="material-symbols-light:download-rounded" /> Telefon: +45 21 95 50 72</p>


          </div>

          <div class=" flex py-6 items-center justify-center ">
            <div class="container">
              <div class="card-form">
                <h2>Kontakt mig</h2>
                <form @submit.prevent="submitForm">
                  <div>
                    <label for="name">Navn:</label>
                    <input type="text" id="name" v-model="formData.name" required>
                  </div>
                  <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="formData.email" required>
                  </div>
                  <div>
                    <label for="message">Besked:</label>
                    <textarea id="message" v-model="formData.message" required></textarea>
                  </div>
                  <button class="btn" type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>  
        </div>
       
      </div>
      
    </div>
  </section>
  


  
</template>

<script>


export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Her kan du tilføje logik til at sende formulardata til en backend eller udføre en anden handling
      console.log(this.formData);
      // Clear form fields
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    }
  }
}
</script>

<style>


.card-form {
  width: 400px;
  padding: 20px;
  border: 1px solid #ccd5c6;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
}

form > div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccd5c6;
  border-radius: 4px;
  box-sizing: border-box;
}



</style>