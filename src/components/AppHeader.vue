<script>
import { store } from '../store.js'
import AppSearch from './AppSearch.vue';
import axios from 'axios';
export default {
  components: {
    AppSearch,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    searchFilm() {
      let apiUrl = store.baseUrl + store.apiMovie + store.apiKey + store.Query;
      if (store.search_title_words !== '') {
        apiUrl += store.search_title_words;
        axios.get(apiUrl).then((result) => {
          store.filmList = result.data.results;

        });
      }
    }
  }

}
</script>

<template lang="">
  <header>
    <div class="container">
      <div class="row align-items-center justify-content-between d-flex">
        <div class="col-3">
          <img src="../assets/img/logo-boolflix@4x.png" alt="" class="w-75">
        </div>
        <AppSearch  @clickSearch="searchFilm()"/>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  background-color: rgb(0, 0, 0);
}
</style>