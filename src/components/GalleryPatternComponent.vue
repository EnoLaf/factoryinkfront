<!-- src/components/GalleryPatternComponent.vue -->
<template>
    <section>
        <div class="gallery">
            <div class="tattoo-1" :style="{ 'background-image': 'url(' + tattoo1 + ')' }"></div>
            <div class="tattoo-2" :style="{ 'background-image': 'url(' + tattoo2 + ')' }"></div>
            <div class="tattoo-3" :style="{ 'background-image': 'url(' + tattoo3 + ')' }"></div>
            <div class="tattoo-4" :style="{ 'background-image': 'url(' + tattoo4 + ')' }"></div>
            <div class="tattoo-5" :style="{ 'background-image': 'url(' + tattoo5 + ')' }"></div>
        </div>
    </section>
</template>

<script>
export default {
name: "GalleryPatternComponent",
props: {
    tattoo1 : {
        type : String,
        required : false
    },
    tattoo2 : {
        type : String,
        required : false
    },
    tattoo3 :{
        type : String,
        required : false
    },
    tattoo4 : {
        type : String,
        required : false
    },
    tattoo5 :{
        type : String,
        required : false
    }
},
};
</script>

<style scoped>
.gallery{
    display: grid;
    grid-auto-columns: 1fr; 
    grid-template-columns: 23.75rem 23.75rem 23.75rem; 
    grid-template-rows: 23.75rem 23.75rem 23.75rem; 
    gap: 2rem 2rem; 
    grid-template-areas: 
        "tattoo-1 tattoo-2 tattoo-3"
        "tattoo-4 tattoo-4 tattoo-3"
        "tattoo-4 tattoo-4 tattoo-5"; 
}
.tattoo-1 { 
    grid-area: tattoo-1;
    background-color: blue;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.tattoo-2 { 
    grid-area: tattoo-2;
    background-color: bisque;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.tattoo-3 { 
    grid-area: tattoo-3;
    background-color: blueviolet; 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.tattoo-4 { 
    grid-area: tattoo-4;
    background-color: crimson;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.tattoo-5 { 
    grid-area: tattoo-5; 
    background-color: pink;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}


/* Responsive */
@media (max-width : 480px) {
    .gallery{
        display: flex;
        flex-direction: column;
    }
    .tattoo-1, .tattoo-2, .tattoo-3, .tattoo-4, .tattoo-5{
        margin-top: 1rem;
        height: 20rem;
        width: 20rem;
    }
}

@media (min-width: 481px) and (max-width : 1024px) {
    .gallery{
        grid-template-columns: 14rem 14rem 14rem; 
        grid-template-rows: 14rem 14rem 14rem; 
        gap: 1rem 1rem;
    }
}

</style>
   