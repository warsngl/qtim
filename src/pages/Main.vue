<script lang="ts">
import Article from "../models/article";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      articles: [] as Article[],
      articlesCount: 8,
    };
  },
  mounted() {
    fetch("https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/")
      .then((res) => res.json())
      .then((json) => (this.articles = json));
  },
  computed: {
    articlesOnPage(): Article[] {
      let p = this.pageId;
      return this.articles.slice((p - 1) * this.articlesCount, p * this.articlesCount);
    },
    pageId: {
      get(): string {
        return this.$route.params?.pageId || 1;
      },
      set(page: string) {
        this.$router.push("/page/" + page);
      },
    },
    pages(): string[] {
      return Array.from(
        { length: Math.ceil(this.articles.length / 8) },
        (_, i) => i + 1 + ""
      );
    },
  },
  methods: {
    nextPage() {
      this.pageId < this.pages.length && this.pageId++;
    },
    openArticle(id: string) {
      this.$router.push("/article/" + id);
    },
  },
  components: {},
});
</script>
<template>
  <div class="main">
    <h1>Articles</h1>
    <div class="articles">
      <div
        class="article hover:translate-y-[-32px]"
        v-for="article in articlesOnPage"
        :key="article.id"
        @click="openArticle(article.id)"
      >
        <div class="article__image">
          <img :src="article.image" alt="" width="280" height="280" />
        </div>
        <h2>{{ article.preview }}</h2>
      </div>
    </div>
    <nav>
      <div
        v-for="page in pages"
        :key="page"
        class="page"
        :class="{ 'active-page': page === pageId }"
        @click="pageId = page"
      >
        <p>{{ page }}</p>
      </div>
      <div class="page" @click="nextPage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.5 7.5L14.5 12.5L9.5 17.5"
            stroke="#494949"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.main {
  @apply flex-grow px-[110px];
}
nav {
  @apply flex mt-[50px] mb-[140px];
}
.page {
  @apply w-[44px] h-[44px] bg-main mx-[4px] flex justify-center items-center text-sec rounded-[12px] cursor-pointer;
}
.active-page {
  @apply bg-sec text-main;
}
.articles {
  @apply grid gap-x-[32px] grid-cols-4 gap-y-[40px];
}
.article {
  @apply w-[280px] h-[400px];
}
.article__image {
  background-image: url("../assets/blank.jpg");
  @apply w-[280px] h-[280px] content-center;
}
h1 {
  @apply mt-[120px] mb-[60px] text-[84px];
}
h2 {
  @apply text-[20px];
}
</style>
