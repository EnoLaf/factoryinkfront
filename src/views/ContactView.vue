<script setup>
</script>

<template>

  <section class="contact">
    <section class="detail">
      <h1>Un Projet?<br>Parlons-en !</h1>
      <p class="subtitle">
        Tu as un projet en tête et tu voudrais en discuter avec un des artistes ?<br>
        Ou tu as envie d’un tatouage et tu veux en savoir plus sur leurs projets flash?
      </p>
      <p class="note">
        Il s’agit uniquement d’une prise de contact pas d’une prise de rendez-vous pour le tatouage.
      </p>
    </section>

    <section class="form">
      <input id="name" type="text" placeholder="Nom">
      <div class="contact-details">
        <input id="email" type="email" placeholder="Email">
        <input id="phone" type="telephone" placeholder="Téléphone">
      </div>
      <input id="content" type="text" placeholder="Message">
      <input id="file" type="file">
      <button>Envoyer</button>
    </section>
    
  </section>

</template>

<script>
  export default {
    name: "ContactView",
    components: {
      
    },
    data() {
      return {
        
      }

    },
    methods: {
      
    }
  }
</script>

<style scoped>
.contact{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 14rem;
  margin-bottom: 14rem;
}
.detail{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.detail h1{
  color: var(--logo-color);
  font-family: 'Noto Serif';
  font-size: 3rem;
  font-weight: 400;
}
.detail p{
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin-top: 2rem;
  width: 23rem;
}
.subtitle{
  font-size: 1.25rem;
}
.note{
  font-size: 1rem;
}
.form{
  margin-left: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.form input{
  background-color: var(--black);
  border: 2px solid var(--light-grey);
  width: 30rem;
  height: 4.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: white;
  padding-left: 1.25rem;
  margin-bottom: 1.3rem;
}
#name{
  border-radius: 8px 8px 0px 0px;
}
.contact-details{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30rem;
}
.contact-details input{
  width: 14rem;
}
#content{
  height: 11.5rem;
  border-radius: 0 0 8px 8px;
}
#file{
  width: 30rem;
  height: fit-content;
  border: none;
  padding-left: 0;
}
button{
  width: 14rem;
  height: 3rem;
  background-color: var(--bronze);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-left: 16rem;
}

/* Responsive */
/* Mobile */
@media (max-width : 480px) {
  .contact{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 9rem;
    margin-bottom: 9rem;
  }
  .detail h1{
    font-size: 2.5rem;
  }
  .detail p{
    margin-top: 1.6rem;
    width: 30rem;
  }
  .subtitle{
    font-size: 1.125rem;
  }
  .note{
    font-size: 1rem;
  }
  .form{
    margin-top: 5rem;
    margin-left: 0;
  }
}

/* Tablet */
@media (min-width: 481px) and (max-width : 1024px) {
  .contact{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 9rem;
    margin-bottom: 9rem;
  }
  .detail h1{
    font-size: 2.5rem;
  }
  .detail p{
    margin-top: 1.6rem;
    width: 30rem;
  }
  .subtitle{
    font-size: 1.125rem;
  }
  .note{
    font-size: 1rem;
  }
  .form{
    margin-top: 5rem;
    margin-left: 0;
  }
}
</style>