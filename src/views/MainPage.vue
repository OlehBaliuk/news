<template>
    <main>
        <div class="main-container">
            <AuthorInfo />
            <NewsItem />
            <CustomButton />
            <div class="advertising-block">
                <Advertising />
                <TVProgram />
            </div>
        </div>
    </main>
</template>

<script>
import AuthorInfo from '@/components/AuthorInfo.vue';
import Advertising from '@/components/Advertising.vue';
import TVProgram from '@/components/TVProgram.vue';
import NewsItem from '@/components/NewsItem.vue';
import CustomButton from '@/components/CustomButton.vue';

export default {
    name: 'MainPage',

    components: {
        AuthorInfo,
        Advertising,
        TVProgram,
        NewsItem,
        CustomButton,
    },
};
</script>

<style lang="scss" scoped>
.main-container {
    position: relative;
    margin: 0 104px 0 116px;
}

.advertising-block {
    position: absolute;
    top: 0;
    right: 0;
}

@media (max-width: 1420px) {
    .main-container {
        margin: 0 50px;
    }
}

@media (max-width: 1300px) {
    .advertising-block {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

@media (max-width: 768px) {
    .main-container {
        margin: 0 12px;
    }
}
</style>
