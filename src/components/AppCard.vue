<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    props: {
        searched_film: Object,
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
        <ul>
            <li> Titolo: {{ searched_film.title }}</li>

        </ul>
    </div>
</template>

<style lang="scss" scoped>
ul li {
    color: white;
}
</style>