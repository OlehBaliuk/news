<template>
    <div class="tv-program">
        <div class="tv-program__title">Програма ТВ</div>
        <div class="tv-program__item">
            <p class="tv-program__time">09:25</p>
            <p class="tv-program__name">т/с “Мене звуть Міша”</p>
            <p class="tv-program__chanel">Інтер</p>
        </div>
        <div class="tv-program__item">
            <p class="tv-program__time">09:25</p>
            <p class="tv-program__name">х/ф “Безславные убл...</p>
            <p class="tv-program__chanel">1+1</p>
        </div>
        <div class="tv-program__item">
            <p class="tv-program__time">09:25</p>
            <p class="tv-program__name">Фінал Ліги Чемпіо...</p>
            <p class="tv-program__chanel">Інтер</p>
        </div>
        <div class="tv-program__item">
            <p class="tv-program__time">09:25</p>
            <p class="tv-program__name">т/с “Мене звуть Міша”</p>
            <p class="tv-program__chanel">ICTV</p>
        </div>
        <div class="tv-program__item">
            <p class="tv-program__time">09:25</p>
            <p class="tv-program__name">Шоу “Голос Діти”</p>
            <p class="tv-program__chanel">Інтер</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tv-program {
    width: 276px;
    height: 236px;
    background: #f6f6f6;
    border-radius: 12px;
    position: relative;
    left: 41px;

    &__title {
        width: 276px;
        height: 48px;
        border-bottom: 1px dashed rgba(0, 0, 0, 0.15);
        padding: 12px 0 12px 16px;
        margin-bottom: 18px;
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    }

    &__item {
        display: flex;
        margin-bottom: 16px;
    }

    &__time {
        margin: 0 9px 0 14px;
        color: #00000040;
    }

    &__chanel {
        position: absolute;
        right: 12px;
        color: $secondary;
    }

    @media (max-width: 1300px) {
        left: 0;
        width: 336px;
        height: 287.3px;
        margin-bottom: 102.7px;

        &__title {
            position: relative;
            left: 1px;
            top: 1px;
            width: 336px;
            height: 55.5px;
            margin-bottom: 22px;
        }

        &__item {
            margin-bottom: 23px;
        }

        &__time {
            margin-right: 20px;
        }

        &__chanel {
            right: 17px;
        }
    }
}
</style>
