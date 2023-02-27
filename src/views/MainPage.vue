<template>
    <main>
        <div class="main-container">
            <AuthorInfo />
            <template v-if="news.length">
                <NewsItem
                    v-for="newsItem in news"
                    :key="newsItem.id"
                    :createdAt="newsItem.createdAt"
                    :commentsCount="newsItem.commentsCount"
                    :title="newsItem.title"
                    :content="newsItem.content"
                    :imageUrl="newsItem.imageUrl"
                />
            </template>
            <CustomButton
                :handleClick="handleClick"
                :isVisibleButton="isVisibleButton"
                :title="title"
                :isDisabledButton="isDisabledButton"
            />
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

    data() {
        return {
            news: [],
            page: 1,
            title: 'Завантажити новини',
            isVisibleButton: true,
            isDisabledButton: false,
        };
    },

    components: {
        AuthorInfo,
        Advertising,
        TVProgram,
        NewsItem,
        CustomButton,
    },

    methods: {
        async handleClick() {
            try {
                this.isDisabledButton = true;

                const { data } = await this.axios.get(`news?page=${this.page}&limit=5`);

                if (data.length) {
                    this.news = [...this.news, ...data];
                    this.page += 1;
                    this.title = 'Більше новин';
                } else {
                    this.isVisibleButton = false;
                }
            } catch (error) {
                console.log(error);
            } finally {
                this.isDisabledButton = false;
            }
        },
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
