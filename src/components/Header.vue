<template>
  <div class="menu-items">
    <ul class="flex flex-row-reverse" :class="textColor">
      <li
        v-for="item in items"
        :key="item.id"
        class="
          menu-item
          m-5
          p-3
          text-3xl
          transition
          ease-in-out
          delay-50
          hover:-translate-y-1 hover:scale-110
          duration-150
        "
      >
        <router-link :to="'/' + item.name.toLowerCase()">{{
          item.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
let id = 0;

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  props: {},
  data() {
    return {
      items: [
        { id: id++, name: "Contact" },
        { id: id++, name: "Skills" },
        { id: id++, name: "About" },
        { id: id++, name: "Home" },
      ],
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
.menu-item {
  font-family: "Lato", "sans-serif";
}

@media only screen and (max-width: 1021px) {
  ul {
    justify-content: center;
  }
}

@media only screen and (max-width: 560px) {
  ul {
    flex-direction: column-reverse;
    text-align: center;
  }

  .menu-item {
    margin: 2px;
    padding: 2px;
  }
}
</style>
