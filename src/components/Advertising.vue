<template>
    <div class="advertising">
        <img class="advertising__image" src="@/assets/adv.png" alt="advertising" />
    </div>
</template>

<style lang="scss" scoped>
.advertising {
    margin: 41px 0 40px 28px;

    img {
        min-width: none;
    }

    @media (max-width: 1300px) {
        margin: 32px 0;

        &__image {
            width: 336px;
            height: 280px;
        }
    }
}
</style>
