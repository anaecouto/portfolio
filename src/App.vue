<template>
  <Header />
  <Content />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Content,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Merriweather:ital,wght@1,300&family=Vollkorn&display=swap");

body {
  background-color: black;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(115, 27, 15);
}
</style>
