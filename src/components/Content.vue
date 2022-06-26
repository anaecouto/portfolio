<template>
  <div class="content justify-items-stretch flex">
    <LeftContent />
    <RightContent />
  </div>
</template>

<script>
import RightContent from "./RightContent.vue";
import LeftContent from "./LeftContent.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Content",
  components: {
    LeftContent,
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