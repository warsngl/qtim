<script>
export default {
  data() {
    return {
      article: {},
    };
  },
  computed: {
    articleId() {
      return this.$route.params.articleId;
    },
  },
  mounted() {
    fetch(
      "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/" + this.articleId
    )
      .then((res) => res.json())
      .then((json) => (this.article = json));
  },
  // watch: {
  //   async articleId(val) {
  //     if(val){
  //       await fetch("https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/" + val)
  //       .then((res) => res.json())
  //       .then((json) => (this.article = json));
  //     }
  //   },
  // },
  components: {},
};
</script>
<template>
  <div class="article">
    <h1>{{ article.title }}</h1>
    <img :src="article.image" alt="" class="article__image" />
    <section class="article__description">
      <p>About</p>
      <article class="mt-[32px]">{{ article.description }}</article>
    </section>
  </div>
</template>

<style scoped>
.article {
  @apply pt-[120px] text-sec px-[110px];
}
.article__image {
  @apply w-[1220px] h-[700px];
}
.article__description {
  @apply my-[80px] w-[700px];
}
h1 {
  @apply text-[84px];
}
p {
  @apply text-[36px];
}
</style>
