<!-- src/components/GalleryComponent.vue -->
<script setup>
import GalleryPattern from "../components/GalleryPatternComponent.vue";
</script>

<template>
    <section class="gallery">
        <section v-if="btn1">
            <GalleryPattern></GalleryPattern>
        </section>
        <section v-if="btn2">
            <GalleryPattern></GalleryPattern>
        </section>
        <section v-if="btn3">
            <GalleryPattern></GalleryPattern>      
        </section>
        <section v-if="btn4">
            <GalleryPattern></GalleryPattern>      
        </section>
        <section v-if="btn5">
            <GalleryPattern></GalleryPattern>      
        </section>
        <section v-if="btn6">
            <GalleryPattern></GalleryPattern>      
        </section>
    </section>

    <div class="container">
        <div class="btn" @click="page1" :style="{ backgroundColor: backgroundColor1 }"></div>
        <div class="btn" @click="page2" :style="{ backgroundColor: backgroundColor2 }"></div>
        <div class="btn" @click="page3" :style="{ backgroundColor: backgroundColor3 }"></div>
        <div class="btn" @click="page4" :style="{ backgroundColor: backgroundColor4 }"></div>
        <div class="btn" @click="page5" :style="{ backgroundColor: backgroundColor5 }"></div>
        <div class="btn" @click="page6" :style="{ backgroundColor: backgroundColor6 }"></div>
    </div>
</template>

<script>
export default {
name: "GalleryComponent",
components: {
      GalleryPattern
},
data() {
    return {
        backgroundColor1 : '#EFEFF1',
        backgroundColor2 : 'rgba(239,239,241,0.2)',
        backgroundColor3 : 'rgba(239,239,241,0.2)',
        backgroundColor4 : 'rgba(239,239,241,0.2)',
        backgroundColor5 : 'rgba(239,239,241,0.2)',
        backgroundColor6 : 'rgba(239,239,241,0.2)',
        btn1 : true,
        btn2 : false,
        btn3 : false,
        btn4 : false,
        btn5 : false,
        btn6 : false,
    }
},
methods: {
      page1() {
        this.btn1 = true;
        this.btn2 = false;
        this.btn3 = false;
        this.btn4 = false;
        this.btn5 = false;
        this.btn6 = false;
        this.backgroundColor1 = '#EFEFF1';
        this.backgroundColor2 = 'rgba(239,239,241,0.2)';
        this.backgroundColor3 = 'rgba(239,239,241,0.2)';
        this.backgroundColor4 = 'rgba(239,239,241,0.2)';
        this.backgroundColor5 = 'rgba(239,239,241,0.2)';
        this.backgroundColor6 = 'rgba(239,239,241,0.2)';
      },
      page2() {
        this.btn1 = false;
        this.btn2 = true;
        this.btn3 = false;
        this.btn4 = false;
        this.btn5 = false;
        this.btn6 = false;
        this.backgroundColor1 = 'rgba(239,239,241,0.2)';
        this.backgroundColor2 = '#EFEFF1';
        this.backgroundColor3 = 'rgba(239,239,241,0.2)';
        this.backgroundColor4 = 'rgba(239,239,241,0.2)';
        this.backgroundColor5 = 'rgba(239,239,241,0.2)';
        this.backgroundColor6 = 'rgba(239,239,241,0.2)';
      },
      page3() {
        this.btn1 = false;
        this.btn2 = false;
        this.btn3 = true;
        this.btn4 = false;
        this.btn5 = false;
        this.btn6 = false;
        this.backgroundColor1 = 'rgba(239,239,241,0.2)';
        this.backgroundColor2 = 'rgba(239,239,241,0.2)';
        this.backgroundColor3 = '#EFEFF1';
        this.backgroundColor4 = 'rgba(239,239,241,0.2)';
        this.backgroundColor5 = 'rgba(239,239,241,0.2)';
        this.backgroundColor6 = 'rgba(239,239,241,0.2)';
      },
      page4() {
        this.btn1 = false;
        this.btn2 = false;
        this.btn3 = false;
        this.btn4 = true;
        this.btn5 = false;
        this.btn6 = false;
        this.backgroundColor1 = 'rgba(239,239,241,0.2)';
        this.backgroundColor2 = 'rgba(239,239,241,0.2)';
        this.backgroundColor3 = 'rgba(239,239,241,0.2)';
        this.backgroundColor4 = '#EFEFF1';
        this.backgroundColor5 = 'rgba(239,239,241,0.2)';
        this.backgroundColor6 = 'rgba(239,239,241,0.2)';
      },
      page5() {
        this.btn1 = false;
        this.btn2 = false;
        this.btn3 = false;
        this.btn4 = false;
        this.btn5 = true;
        this.btn6 = false;
        this.backgroundColor1 = 'rgba(239,239,241,0.2)';
        this.backgroundColor2 = 'rgba(239,239,241,0.2)';
        this.backgroundColor3 = 'rgba(239,239,241,0.2)';
        this.backgroundColor4 = 'rgba(239,239,241,0.2)';
        this.backgroundColor5 = '#EFEFF1';
        this.backgroundColor6 = 'rgba(239,239,241,0.2)';
      },
      page6() {
        this.btn1 = false;
        this.btn2 = false;
        this.btn3 = false;
        this.btn4 = false;
        this.btn5 = false;
        this.btn6 = true;
        this.backgroundColor1 = 'rgba(239,239,241,0.2)';
        this.backgroundColor2 = 'rgba(239,239,241,0.2)';
        this.backgroundColor3 = 'rgba(239,239,241,0.2)';
        this.backgroundColor4 = 'rgba(239,239,241,0.2)';
        this.backgroundColor5 = 'rgba(239,239,241,0.2)';
        this.backgroundColor6 = '#EFEFF1';
      },
    }
};
</script>

<style scoped>
h1{
    font-size: 56px;
}
.gallery{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}
.container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 20vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
}
.btn{
    height: 25px;
    width: 25px;
    border-radius: 12.5px;
}


/* Responsive */
@media (max-width : 480px) {
    
}

@media (min-width: 481px) and (max-width : 1024px) {
    .container{
        width: 40vw;
    }
}

</style>
   