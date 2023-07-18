<!-- src/components/FooterComponent.vue -->
<template>
    <footer class="footer">
        <div class="line"></div>

        <div class="container">
            <div class="logo">
                <a href="/">
                <img src="../../public/logo.png" alt="Logo">
                </a>
            </div>

            <div class="schedule">
                <p>Horaires : <br>
                Ouvert du lundi au samedi <br>
                De 14:00 à 18:00 <br>
                fermé le dimanche</p>
            </div>

            <div class="contact-info">

                <div class="address">
                    <img src="../../public/icon-pin-25.png" alt="pin-icon">
                    <p>4a Rue du général Leclerc <br>
                    67210 Obernai</p>
                </div>

                <div class="phone">
                    <img src="../../public/icon-phone-25.png" alt="phone-icon">
                    <p>07 69 01 07 83</p>
                </div>

                <div class="network">
                    <a href="https://www.facebook.com/Factoryinktattoo">
                        <img src="../../public/icon-facebook-25.png" alt="facebook-icon">
                    </a>
                    <a href="https://www.instagram.com/factory_ink_tattoo">
                        <img id="instagram-icon" src="../../public/icon-instagram-25.png" alt="instagram-icon">
                    </a>
                </div>

            </div>

            <div class="contact-socials">
                <button @click="redirectToContact" class="contact-button">Nous contacter</button>

                <div class="social-network">
                    <a href="https://www.facebook.com/Factoryinktattoo">
                        <img src="../../public/icon-facebook-25.png" alt="facebook-icon">
                    </a>
                    <a href="https://www.instagram.com/factory_ink_tattoo">
                        <img src="../../public/icon-instagram-25.png" alt="instagram-icon">
                    </a>
                </div>
            </div>
            
        </div>

        <div class="rights">
            <p>Tous droits réservés - Ink Factory © 2023</p>
        </div>
        
    </footer>
</template>

<script>
export default {
name: "FooterComponent",
methods: {
    redirectToContact() {
      this.$router.push('/contact');
    },
},
};
</script>

<style scoped>
.footer{
    position: relative;
    display: block;
    width: 100vw;
}
.line{
    margin-left: auto;
    margin-right: auto;
    background-color: var(--bronze-75);
    width: 92vw;
    height: 1px;
    margin-bottom: 2.4rem;
}
.container{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
}
.logo a{
    display: block;
}
.logo a img{
    display: block;
    width: 80px;
    height: 80px;
}
.schedule{
    display: block;
}
.schedule p, .address p, .phone p, .rights p{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
}
.contact-info{
    display: flex;
    flex-direction: column;
}
.address, .phone{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.phone, .network{
    margin-top: 1.44rem;
}
.address img, .phone img{
    display: flex;
    width: 25px;
    height: 25px;
}
.address p, .phone p{
    padding-left: 15px;
}
.network{
    display: none;
    flex-direction: row;
    align-items: center;
}
#instagram-icon{
    padding-left: 1.25rem;
}
.contact-socials{
    display: flex;
    flex-direction: column;
}
.contact-button{
    background-color: var(--bronze);
    width: 195px;
    height: 30px;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    outline: none;
    border: none;
    color: var(--black);
}
.social-network{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1.5rem;
}
.rights{
    display: flex;
    background-color: var(--bronze-30);
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    width: 100%;
    height: 50px;
}


/* Responsive */
@media (max-width : 480px) {
    .container{
        justify-content: center;
        flex-direction: column;
    }
    .logo a{
        display: none;
    }
    .schedule p, .address p, .phone p{
        font-size: 1rem;
    }
    .schedule p{
        text-align: center;
    }
    .address{
        margin-top: 2rem;
    }
    .network{
        display: flex;
        justify-content: center;
    }
    .contact-socials{
        display: none;
    }
    .rights p{
        font-size: 0.875rem;
    }
}

@media (min-width: 481px) and (max-width : 1024px) {
    .container{
        align-items: flex-start;
        justify-content: center;
    }
    .logo a{
        display: none;
    }
    .contact-info{
        margin-left: 6rem;
    }
    .schedule p, .address p, .phone p{
    font-size: 1rem;
}
    .network{
        display: flex;
    }
    .contact-socials{
        display: none;
    }
    .rights p{
        font-size: 1.125rem;
    }
}

</style>
   