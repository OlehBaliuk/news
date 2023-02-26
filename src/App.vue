<template>
    <div id="app">
        <Header />
        <router-view />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name: 'App',

    components: { Header },
};
</script>

<style lang="scss">
@import '@/styles/_reset.scss';
@import '@/styles/_fonts.scss';

body {
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 14px;
    overflow-x: hidden;
}

#app {
    max-width: 1440px;
    margin: 0 auto;
}
</style>
