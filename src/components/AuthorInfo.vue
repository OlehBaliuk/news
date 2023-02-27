<template>
    <div class="author">
        <div class="author__avatar-container">
            <img class="author__avatar" src="@/assets/avatar.png" alt="avatar" />
        </div>
        <div class="author__main-info">
            <div class="author__statistics-container">
                <div class="author__statistics">
                    <div class="author__number-articles-container">
                        <img class="author__number-articles-icon" src="@/assets/article.svg" alt="article" />
                        <span class="author__number-article">345</span>
                    </div>
                    <div class="author__number-followers-container">
                        <img class="author__number-followers-icon" src="@/assets/user.svg" alt="user" />
                        <span class="author__number-followers">4 567</span>
                    </div>
                    <div class="author__number-views-container">
                        <img class="author__number-views-icon" src="@/assets/eye.svg" alt="eye" />
                        <span class="author__number-views">12 809 678</span>
                    </div>
                </div>
                <p class="author__name">Костянтин Заруцький</p>
            </div>

            <p class="author__description">
                Костантин Заруцький - справжнє ім’я популярного автоблогера, який публікується в мережі під ніком
                AcademeG. Його відео про перетворення старих авто дивляться міліони підписників. Сам він називає свою
                роботу автокритикою
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthorInfo',
};
</script>

<style lang="scss" scoped>
.author {
    display: flex;
    width: 891px;
    padding-top: 51px;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.15);

    &__avatar-container {
        position: relative;
        top: -2px;
        margin-right: 24px;

        img {
            max-width: none;
        }
    }

    &__main-info div {
        display: flex;
    }

    &__statistics-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__statistics {
        position: relative;
        top: -1px;
        color: rgba(0, 0, 0, 0.54);
    }

    &__number-articles-icon {
        margin-right: 8px;
    }

    &__number-article {
        margin-right: 32px;
    }

    &__number-followers-icon {
        margin-right: 6px;
    }

    &__number-followers {
        margin-right: 31.5px;
    }

    &__number-views-icon {
        margin-right: 6px;
    }

    &__name {
        margin-top: 10px;
        font-weight: 700;
        font-size: 32px;
        line-height: 36px;
        color: rgba(0, 0, 0, 0.8);
    }

    &__description {
        width: 737px;
        margin-top: 8px;
        margin-bottom: 40px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.8);
    }

    @media (max-width: 1300px) {
        margin: 0 auto;
    }

    @media (max-width: 1024px) {
        width: 600px;

        &__description {
            width: 500px;
        }
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 336px;

        &__main-info {
            text-align: center;
        }

        &__statistics {
            justify-content: center;
            margin-top: 30px;
        }

        &__description {
            width: 336px;
        }

        &__statistics-container {
            flex-direction: column-reverse;
        }
    }

    @media (max-width: 360px) {
        &__avatar-container {
            top: -18px;
            left: 5px;
        }

        &__name {
            font-size: 28px;
            margin-top: -7px;
        }

        &__statistics {
            top: -18px;
            right: 1px;
        }
    }
}
</style>
