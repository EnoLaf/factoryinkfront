<script setup>
import Accordion from "../components/AccordionComponent.vue"
</script>

<template>
  <header>
    <h1>FAQ</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu nisl, posuere vel condimentum vel, 
      consectetur in lacus. Sed sed massa vitae risus feugiat maximus. Nulla malesuada quam justo, non malesuada 
      velit tincidunt at. Sed mollis venenatis sodales. Aenean ex neque, auctor at faucibus at, porttitor a risus. 
      Etiam est ex, porta sed nulla a, imperdiet ultricies tortor. Morbi interdum libero id elementum pretium.
    </p>
  </header>
  
  <section>
    <div class="accordionComponent" v-for="qa in jsonData" :key="qa.id">
      <Accordion :question="qa.question" :answer="qa.answer"></Accordion>
    </div>
  </section>

  <div class="empty"></div>

</template>

<script>
  export default {
    name: "QAView",
    components: {
      Accordion
    },
    data() {
      return {
        jsonData : null,
      }

    },
    created() {
    // Effectuer la requête HTTP vers l'API pour récupérer le JSON
    fetch('https://127.0.0.1:8000/api/qa/all') // Remplacez l'URL par l'adresse de l'API réelle
      .then(response => response.json())
      .then(data => {
        this.jsonData = data; // Stocker les données JSON récupérées dans la variable jsonData
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du JSON depuis l\'API:', error);
      });
  },
  }
</script>

<style scoped>
header{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 15rem;
  margin-top: 14rem;
  margin-bottom: 11rem;
}
header h1{
  color: var(--logo-color);
  font-family: 'Noto Serif';
  font-size: 6rem;
  font-weight: 400;
}
header p{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  width: 60rem;
  margin-top: 5.8rem;
}
.accordionComponent{
  margin-bottom: 1rem;
}
.empty{
  margin-bottom: 14rem;
}

/* Responsive */
/* Mobile */
@media (max-width : 480px) {
  header{
    margin-left: 2.75rem;
    margin-top: 10rem;
    margin-bottom: 2.5rem;
  }
  header h1{
    font-size: 3rem;
  }
  header p{
    font-size: 1rem;
    width: 19rem;
    margin-top: 4rem;
  }
  .empty{
    margin-bottom: 10rem;
  }
  .accordionComponent{
    margin-bottom: 1rem;
  }
}

/* Tablet */
@media (min-width: 481px) and (max-width : 1024px) {
  header{
    margin-left: 5rem;
    margin-top: 12rem;
    margin-bottom: 4rem;
  }
  header h1{
    font-size: 4rem;
  }
  header p{
    font-size: 1.125rem;
    width: 40rem;
    margin-top: 2.6rem;
  }
  .empty{
    margin-bottom: 12rem;
  }
  .accordionComponent{
    margin-bottom: 1rem;
  }
}
</style>