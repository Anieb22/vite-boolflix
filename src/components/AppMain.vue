<script>
import { store } from '../store'
import axios from 'axios'
export default {
    data() {
        return {
            store
        }
    },

    mounted() {
        axios.get(store.movieApi).then((result) => {
            store.myMovie = result.data.results;
        })
    },
}
</script>

<template lang="">
    <main>
        <div v-for="(film, index) in store.filmList" :key="index">
            <p class="text-light">{{ film.original_title}}</p>
        </div> 
    </main>
</template>
<style lang="">
    
</style>