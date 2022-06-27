<template>
  <Header />
  <Content />
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Content from "../components/ContactContent/Content.vue";
import Footer from "../components/Footer.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  components: {
    Header,
    Content,
    Footer,
  },
};
</script>

<style>
</style>
