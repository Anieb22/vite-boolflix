<script>
import { store } from '../store.js'
import AppSearch from './AppSearch.vue';
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
    filterFilms() {
      console.log('emit funzionante')
    }
  },

}
</script>

<template lang="">
  <header>
    <div class="container">
      <div class="row align-items-center justify-content-between d-flex">
        <div class="col-3">
          <img src="../assets/img/logo-boolflix@4x.png" alt="" class="w-75">
        </div>
        <AppSearch @search="filterFilms"/>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  background-color: rgb(0, 0, 0);
}
</style>