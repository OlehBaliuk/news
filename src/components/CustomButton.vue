<template>
    <div class="container">
        <button class="button">Завантажити новини</button>
    </div>
</template>

<script>
import { Vue } from 'vue-property-decorator';

export default class CustomButton extends Vue {}
</script>

<style lang="scss" scoped>
.container {
    width: 891px;
    text-align: center;
}

.button {
    position: relative;
    left: 13px;
    margin-top: 39px;
    width: 276px;
    height: 40px;
    background: #ffffff;
    border: 2px solid $secondary;
    border-radius: 24px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
}

@media (max-width: 1300px) {
    .container {
        width: 891px;
        margin: 0 auto;
        padding-bottom: 32px;
        border-bottom: 1px dashed rgba(0, 0, 0, 0.15);
    }

    .button {
        left: 0;
    }
}

@media (max-width: 1024px) {
    .container {
        width: 600px;
    }
}

@media (max-width: 768px) {
    .container {
        width: 336px;
    }
}
</style>
