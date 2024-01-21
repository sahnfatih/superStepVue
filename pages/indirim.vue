<template>
    <div>
        <NavBar/>
        <LoginVue/>
        <Footer2Vue />
        
    </div>
    
</template>


<script>
import Footer2Vue from '~/components/Footer2.vue'
import NavBar from '~/components/NavBar.vue';
import LoginVue from '~/components/Login.vue';

export default {
    components: { LoginVue, NavBar, Footer2Vue}
}
</script>
