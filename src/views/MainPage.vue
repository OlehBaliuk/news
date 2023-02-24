<template>
    <div class="container">
        <Header />
        <div>123</div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
    components: {
        Header,
    },
})
export default class MainPage extends Vue {}
</script>
