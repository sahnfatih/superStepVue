<template>
    <div>
        <NavBar/>
        <Ayakkabi/>
        <Footer2Vue />
        
    </div>
    
</template>


<script>
import Footer2Vue from '~/components/Footer2.vue'
import NavBar from '~/components/NavBar.vue';
import Ayakkabi from '~/components/Ayakkabi.vue';

export default {
    components: { Ayakkabi,NavBar, Footer2Vue}
}
</script>
