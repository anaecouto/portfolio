<template>
  <div
    class="
      right-content
      xl:w-1/2
      self-center
      text-center
      m-5
      p-3
      text-2xl
      leading-loose
      text-red-800
    "
  >
    <p>
      I'm glad you made it this far! Below you'll find a list of all social
      medias as well as the email address that I use for contacting:
    </p>
    <br />
    <p>
      <a href="https://github.com/anaecouto">GitHub's profile</a>
    </p>
    <p>
      <a href="https://www.facebook.com/anaelisa.couto.9">Facebook's profile</a>
    </p>
    <p>
      <a href="https://www.linkedin.com/in/ana-elisa-do-couto-427433123"
        >LinkedIn's profile</a
      >
    </p>
    <br />
    <p>
      or you can send an e-mail to:
      <a href="mailto:anaecouto92@gmail.com">anaecouto92@gmail.com</a>
    </p>
    <p>Thank you for staying!</p>
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
  max-width: 750px;
}

a {
  text-decoration: underline;
}
</style>