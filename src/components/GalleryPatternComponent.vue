<!-- src/components/GalleryPatternComponent.vue -->
<template>
    <section>
        <div class="gallery">
            <div class="tattoo-1"></div>
            <div class="tattoo-2"></div>
            <div class="tattoo-3"></div>
            <div class="tattoo-4"></div>
            <div class="tattoo-5"></div>
        </div>
    </section>
</template>

<script>
export default {
name: "GalleryPatternComponent",
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
}
.tattoo-2 { 
    grid-area: tattoo-2;
    background-color: bisque;
}
.tattoo-3 { 
    grid-area: tattoo-3;
    background-color: blueviolet; 
}
.tattoo-4 { 
    grid-area: tattoo-4;
    background-color: crimson;
}
.tattoo-5 { 
    grid-area: tattoo-5; 
    background-color: pink;
}


/* Responsive */
@media (max-width : 480px) {
    
}

@media (min-width: 481px) and (max-width : 1024px) {
    .gallery{
        grid-template-columns: 14rem 14rem 14rem; 
        grid-template-rows: 14rem 14rem 14rem; 
        gap: 1rem 1rem;
    }
}

</style>
   