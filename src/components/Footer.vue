<template>
  <div class="footer flex justify-center">
    <p class="footer-content self-end text-1xl m-6 p-3" :class="textColor">
      portfolio by @anaecouto
    </p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  data() {
    return {
      textColor: "",
    };
  },
  created() {
    this.emitter.on(
      "aboutEvent",
      (event) => (this.textColor = event.textColor)
    );
    this.emitter.on("homeEvent", (event) => (this.textColor = event.textColor));
    this.emitter.on(
      "skillsEvent",
      (event) => (this.textColor = event.textColor)
    );
    this.emitter.on(
      "contactEvent",
      (event) => (this.textColor = event.textColor)
    );
  },
};
</script>

<style scoped>
.footer-content {
  font-family: "Lato", "sans-serif";
}
</style>
