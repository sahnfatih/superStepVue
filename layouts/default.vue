<template>
      <div>
    
        <router-view/>
      </div>
  </template> 
  <script>
  import Navbar from '../components/NavBar.vue';
  import SezonunTrendleriVue from '../components/SezonunTrendleri.vue';
  import ContainerVue from '../components/Container.vue';
  import KoleksiyonlarVue from '../components/Koleksiyonlar.vue'
  import Container2Vue from '../components/Container2.vue';
  import FooterVue from '../components/Footer.vue'
  import Container3Vue from '../components/Container3.vue';
  import Footer2Vue from '../components/Footer2.vue'
  import FavoriModellerSliderVue from '../components/FavoriModellerSlider.vue';
  import Container4Vue from '../components/Container4.vue'

  export default {
    name: "DefaultLayout",
    components: { Navbar, SezonunTrendleriVue, ContainerVue,
    KoleksiyonlarVue, Container2Vue,
    FooterVue, Container3Vue, Footer2Vue,
    FavoriModellerSliderVue, Container4Vue, },
         
       
}
  
  
  
  
  </script>
  
  