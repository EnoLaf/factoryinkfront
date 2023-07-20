<!-- src/components/ArtistComponent.vue -->
<template>
    <section class="artist">
        <div class="container">
            <p class="name">{{ name }}</p>
            <p class="styles">{{ styles }}</p>
            <p class="presentation">{{ presentation }}</p>
            <button class="portfolio-button">Portfolio</button>
        </div>
        <div class="img" :style="{ 'background-image': 'url(' + profilePicture + ')' }"></div>
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
    margin-right: 4.5rem;
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
    .img{
        width: 200px;
        height: 200px;
    }
    .name{
        font-size: 1.125rem;
    }
    .portfolio-button{
        font-size: 1rem;
        width: 100px;
    }
}

@media (min-width: 481px) and (max-width : 1024px) {
    .img{
        width: 250px;
        height: 300px;
    }
}

</style>
   