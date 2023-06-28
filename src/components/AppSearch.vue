<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <div class="col-3">
        <div class="input-group input-group-sm">
            <input  v-model="store.search_title_words" type="text" class="form-control" placeholder="Cosa vuoi vedere oggi?" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" @keyup.enter="$emit('clickSearch')">
            <button class="btn-danger btn" type="button" @click="$emit('clickSearch')">
              Cerca
            </button>
        </div>
    </div>

</template>
<style lang="">
    
</style>