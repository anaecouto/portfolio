<template>
  <div class="content justify-items-stretch flex">
    <LightBulb />
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
};
</script>

<style>
@media only screen and (max-width: 1021px) {
  .content {
    flex-direction: column;
  }
}
</style>