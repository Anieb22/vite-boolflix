<script>
import { store } from '../store'
import axios from 'axios'
export default {
    data() {
        return {
            store
        }
    },

    methods: {
        getFilm() {
            let myMovies = store.movieApi;

            if (store.searchMovie !== '') {
                myMovies += `?name=${store.searchMovie}`
            }
        }
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