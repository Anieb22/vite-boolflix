<script>
import { store } from '../store'
import AppCard from './AppCard.vue'
export default {
    components: {
        AppCard,
    },
    data() {
        return {
            store
        }
    },

}
</script>

<template lang="">
    <main class="d-flex flex-row flex-wrap">
        <AppCard v-for="(film, index) in store.filmList" :key="index" :searchedFilm="film"/> 
    </main>
</template>
<style lang="">
    
</style>