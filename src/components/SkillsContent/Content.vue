<template>
  <div class="content justify-items-stretch flex">
    <LightBulb class="yellow-lightbulb" />
    <RightContent />
  </div>
</template>

<script>
import RightContent from "./RightContent.vue";
import LightBulb from "../Lightbulb.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Content",
  components: {
    LightBulb,
    RightContent,
  },
  mounted() {
    this.emitter.emit("skillsEvent", { textColor: "text-yellow-700" });
  },
};
</script>

<style>
@media only screen and (max-width: 1021px) {
  .content {
    flex-direction: column;
  }
}

.yellow-lightbulb {
  filter: sepia(99%) saturate(759%) hue-rotate(28deg) brightness(150%);
}
</style>