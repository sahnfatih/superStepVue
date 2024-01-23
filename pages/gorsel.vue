<template>
    <div>
        <NavBar/>
        <Urun/>
        <Footer2Vue />
        
    </div>
    
</template>


<script>
import Footer2Vue from '~/components/Footer2.vue'
import NavBar from '~/components/NavBar.vue';
import Urun from '~/components/Urun.vue';

export default {
    components: { Urun ,NavBar, Footer2Vue}
}
</script>
