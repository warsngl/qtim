<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style>
html {
  margin: 0;
  padding: 0;
  width: 1440px;
  font-family: "TT Commons" !important;
}
</style>
