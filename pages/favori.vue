<template>
    <div>
        <NavBar/>
        <Fav/>
        <Footer2Vue />
        
    </div>
    
</template>


<script>
import Footer2Vue from '~/components/Footer2.vue'
import NavBar from '~/components/NavBar.vue';
import Fav from '~/components/Fav.vue';

export default {
    layout: 'default',
    components: { Fav, NavBar, Footer2Vue}
}
</script>
