<!-- src/components/ArtistComponent.vue -->
<template>
    <section class="artist">
      <div class="img" :style="{ 'background-image': 'url(' + profilePicture + ')' }"></div>
      <div class="container">
        <p class="name">{{ name }}</p>
        <p class="styles">{{ styles }}</p>
        <p class="presentation">{{ presentation }}</p>
        <button class="portfolio-button">Portfolio</button>
      </div>
    </section>
</template>

<script>
export default {
name: "ArtistComponent",
props: {
    profilePicture : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    styles : {
        type : String,
        required : true
    },
    presentation : {
        type : String,
        required : true
    }
}
};
</script>

<style scoped>
.artist{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.container{
    margin-left: 4.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.img{
    width: 300px;
    height: 400px;
    border-radius: 20px;
    border: 2px solid var(--logo-color);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.name{
    font-family: 'Noto Serif';
    font-size: 2rem;
    font-weight: 500;
    color: var(--logo-color);
}
.styles{
    margin-top: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
}
.presentation{
    margin-top: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    width: 30rem;
}
.portfolio-button{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    color: var(--black);
    background-color: var(--bronze);
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: none;
    outline: none;
}


/* Responsive */
@media (max-width : 480px) {
    .artist{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container{
        margin-left: 0;
        flex-direction: column;
        align-items: flex-start;
    }
    .img{
        width: 200px;
        height: 200px;
    }
    .name{
        margin-top: 2rem;
        font-size: 1.25rem;
    }
    .styles{
        font-size: 1.125rem;
    }
    .presentation{
        font-size: 1rem;
        width: 20.5rem;
    }
    .portfolio-button{
        margin-top: 2rem;
        font-size: 1rem;
        width: 100px;
    }
}

@media (min-width: 481px) and (max-width : 1024px) {
    .container{
        margin-left: 3rem;
    }
    .img{
        width: 250px;
        height: 300px;
    }
    .name{
        font-size: 1.5rem;
    }
    .styles{
        font-size: 1.25rem;
    }
    .presentation{
        font-size: 1.125rem;
        width: 22rem;
    }
    .portfolio-button{
        margin-top: 1.8rem;
    }
}

</style>
   