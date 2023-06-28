<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
    components: {
        AppHeader,
        AppMain,
    }
}
</script>

<template lang="">
    <AppHeader />  
    <div class="container">
        <div class="row">
            <AppMain />
        </div>
    </div>
</template>
<style lang="scss">
@use "src/style/general.scss" as *
</style>