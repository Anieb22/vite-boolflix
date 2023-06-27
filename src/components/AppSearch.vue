<script>
export default {
    data() {
        return {
            searchText: ''
        }
    },
    methods: {
        sendSearch() {
            console.log(this.searchText);
        }
    },
}
</script>

<template lang="">
    <div class="col-3">
        <div class="input-group input-group-sm">
            <input v-model="searchText" type="text" class="form-control" placeholder="Cosa vuoi vedere oggi?" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" @keyup.enter="$emit('search')">
            <button class="btn-danger btn" type="button" @click="$emit('search')">
              Cerca
            </button>
        </div>
    </div>

</template>
<style lang="">
    
</style>