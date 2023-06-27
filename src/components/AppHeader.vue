<script>
import { store } from '../store.js'
export default {

}
</script>

<template lang="">
  <header>
    <div class="container">
      <div class="row align-items-center justify-content-between d-flex">
        <div class="col-3">
          <img src="../assets/img/logo-boolflix@4x.png" alt="" class="w-75">
        </div>
        <div class="col-3">
          <div class="input-group input-group-sm">
            <input type="text" class="form-control" placeholder="Cosa vuoi vedere oggi?" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            <button class="btn-danger btn" type="button">
              Cerca
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  background-color: rgb(0, 0, 0);
}
</style>