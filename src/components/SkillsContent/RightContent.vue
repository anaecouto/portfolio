<template>
  <div
    class="
      right-content
      xl:w-1/2
      self-center
      m-5
      p-3
      text-2xl
      leading-loose
    "
  >
    <div class="flex flex-row items-center justify-around">
      <img src="../../assets/git.png" class="w-2" alt="git" />
      <img src="../../assets/keycloak.png" alt="keycloak" class="w-2" />
      <img src="../../assets/kafka.png" alt="kafka" class="w-2" />
      <img src="../../assets/kotlin.png" alt="kotlin" class="w-2" />
    </div>
    <div class="flex flex-row items-center justify-around">
      <img src="../../assets/mongodb.png" alt="mongodb" class="w-2" />
      <img src="../../assets/docker.png" alt="docker" class="w-2" />
      <img src="../../assets/nest.png" alt="nest" class="w-2" />
      <img src="../../assets/node-js.png" alt="node-js" class="w-2" />
    </div>
    <div class="flex flex-row items-center justify-around">
      <img src="../../assets/postgresql.png" alt="postgresql" class="w-2" />
      <img src="../../assets/quarkus.png" alt="quarkus" class="w-2" />
      <img src="../../assets/spring.png" alt="spring" class="w-2" />
      <img src="../../assets/typescript.png" alt="typescript" class="w-2" />
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Content",
};
</script>

<style scoped>
.right-content {
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: italic;
}

img {
  width: 15%;
  height: 15%;
}
</style>