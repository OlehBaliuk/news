<template>
    <div v-if="isVisibleButton" class="container">
        <button @click="handleClick" class="button" :disabled="isDisabledButton">{{ title }}</button>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Завантажити новини',
        },

        handleClick: {
            type: Function,
        },

        isVisibleButton: {
            type: Boolean,
            default: true,
        },

        isDisabledButton: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 891px;
    text-align: center;
    padding-bottom: 32px;
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
