<template>
  <div class="page-not-found grow grid justify-items-center">
    <img src="../assets/404.png" alt="404" />
    <p
      class="
        not-found
        xl:w-1/2
        text-center
        m-5
        p-3
        text-2xl
        leading-loose
        text-red-800
      "
    >
      This page doesn't exist. Please return to home.
    </p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PageError404",
};
</script>

<style scoped>
.right-content {
  font-family: "Merriweather", serif;
  font-weight: 1000;
  max-width: 750px;
}

img {
  margin: 15px;
  filter: invert(13%) sepia(97%) saturate(2763%) hue-rotate(351deg)
    brightness(71%) contrast(108%);
}
</style>