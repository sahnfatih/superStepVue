<template>
    <div>
        <NavBar/>
        <Sepet/>
        <Footer2Vue />
        
    </div>
    
</template>


<script>
import Footer2Vue from '~/components/Footer2.vue'
import NavBar from '~/components/NavBar.vue';
import Sepet from '~/components/Sepet.vue';

export default {
    components: { Sepet,NavBar, Footer2Vue}
}
</script>
