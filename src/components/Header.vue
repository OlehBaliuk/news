<template>
    <header class="header">
        <button class="header__menu-button">
            <img class="header__menu-icon" src="@/assets/menu.svg" alt="menu" />
        </button>
        <router-link to="/" class="header__logo">
            <img class="header__logo-icon" src="@/assets/logo.svg" alt="logo"
        /></router-link>
        <nav class="header__navigation">
            <router-link to="/" class="header__link-first">новини</router-link>
            <router-link to="/" class="header__link-second">спорт</router-link>
            <router-link to="/" class="header__link-third">фінанси</router-link>
        </nav>
        <div class="header__localization">
            <button class="header__localization-button header__localization-button_active">UA</button>
            <button class="header__localization-button">RU</button>
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.header {
    position: relative;
    display: flex;
    align-items: center;
    height: 48px;
    font-size: 12px;
    font-weight: 500;
    background: $primary;

    a {
        color: $secondary;
        text-transform: uppercase;
    }

    button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    &__menu-button {
        margin-left: 117.5px;
    }

    &__logo {
        margin: 0px 54px 0 27px;
    }

    &__navigation {
        position: relative;
        top: 1px;
    }

    &__link-first {
        margin-right: 27px;
    }

    &__link-second {
        margin-right: 20px;
    }

    &__localization {
        position: absolute;
        right: 104px;
    }

    &__localization-button {
        color: #ffffff54;
    }

    &__localization-button_active {
        color: $secondary;
    }

    &__localization-button:first-child {
        margin-right: 5px;
    }

    @media (max-width: 700px) {
        &__navigation {
            display: none;
        }

        &__menu-button {
            margin-left: 60px;
        }

        &__localization {
            right: 60px;
        }
    }

    @media (max-width: 360px) {
        &__navigation {
            display: none;
        }

        &__menu-button {
            margin-left: 17.5px;
        }

        &__localization {
            right: 12px;
        }

        &__logo {
            margin-left: 23.5px;
        }
    }
}
</style>
