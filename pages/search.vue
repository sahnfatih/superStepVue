<template>
    <div>
        <NavBar/>
        <SearchBar/>
        <Footer2Vue />
        
    </div>
    
</template>


<script>
import Footer2Vue from '~/components/Footer2.vue'
import NavBar from '~/components/NavBar.vue';
import SearchBar from '~/components/SearchBar.vue';
export default {
    layout: 'default',
    components: { SearchBar, NavBar, Footer2Vue}
}
</script>
