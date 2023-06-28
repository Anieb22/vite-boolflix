<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    props: {
        searchedFilm: Object,
    },
    data() {
        return {
            store,
        };
    },
    mounted() {
        axios.get(store.movieApi).then((response) => {
            store.movieList = response.data.results;
        });
    },
};
</script>

<template>
    <div>
        <img :src="store.baseUrlImage + searchedFilm.poster_path" />
        <li> Titolo: {{ searchedFilm.title || searchedFilm.name }} </li>
        <ul>
            <li>Titolo originale: {{ searchedFilm.original_title || searchedFilm.original_name }}</li>
            <li>Lingua: <img :src="'/flag/' + searchedFilm.original_language + '_16.png'" /> </li>
            <li>Voto: {{ searchedFilm.vote_average }}</li>
            <li>film o serie: {{ searchedFilm.media_type }} </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
ul,
li {
    color: white;
}
</style>