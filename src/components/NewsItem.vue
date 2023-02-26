<template>
    <article class="news-item">
        <div class="news-item__image-container">
            <img class="news-item__image" src="@/assets/adv.png" alt="news-image" />
        </div>
        <div class="news-item__main-info">
            <div class="news-item__data">
                <p class="news-item__date">08:30 - 24 ноября 2020</p>
                <div class="news-item__comments-container">
                    <img class="news-item__comment-icon" src="@/assets/comment.svg" alt="comment-icon" />
                    <p class="news-item__comments-count">4</p>
                </div>
            </div>
            <div class="news-item__title">
                У Білорусі почали відраховувати студентів за протести: з університету - 5 осіб
            </div>
            <div class="news-item__description">
                Професор Гарварду Сергій Плохій про нові обличчя в українській владі, ідолів і зрадників, майбутнє
                "руського світу" і уроки Чорнобиля в епоху COVID-19.
            </div>
        </div>
    </article>
</template>

<script>
// import { Vue } from 'vue-property-decorator';

// export default class NewsItem extends Vue {}
//
</script>

<style lang="scss" scoped>
.news-item {
    display: flex;
    width: 891px;
    min-height: 173px;
    padding-top: 24px;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.15);

    &__main-info {
        margin-left: 25px;
    }

    &__image {
        position: relative;
        left: 1px;
        bottom: 1px;
        width: 200px;
        height: 125px;
        border-radius: 12px;
        object-fit: cover;
        max-width: none;
    }

    &__data {
        display: flex;
        color: #00000080;
    }

    &__date {
        margin-right: 29px;
    }

    &__comments-container {
        display: flex;
    }

    &__comment-icon {
        margin-right: 4px;
    }

    &__title {
        margin-top: 10px;
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
    }

    &__description {
        margin-top: 7px;
        line-height: 20px;
        color: #00000054;
    }

    @media (max-width: 1300px) {
        margin: 0 auto;
    }

    @media (max-width: 1024px) {
        width: 600px;

        &__main-info {
            width: 336px;
        }

        &__description {
            display: none;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 336px;
        border: none;

        &__main-info {
            margin: 12px 0 0 0;
        }

        &__image {
            width: 336px;
            height: 190px;
        }

        &__comments-container {
            width: 141px;
            justify-content: end;
        }

        &__title {
            margin-top: 7px;
            font-size: 18px;
            line-height: 24px;
        }
    }
}
</style>
