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
        position: relative;
        right: 2.5px;
        margin: 30px 0 34px 0;

        &__image {
            width: 336px;
            height: 280px;
        }
    }
}
</style>
