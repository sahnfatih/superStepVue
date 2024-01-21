<template>
    <div>
        <NavBar/>
        <Footer2Vue />
        
    </div>
    
</template>


<script>
import Footer2Vue from '~/components/Footer2.vue'
import NavBar from '~/components/NavBar.vue';

export default {
    components: { NavBar, Footer2Vue}
}
</script>
