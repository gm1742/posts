<template>
  <div class="container pt-5 pb-10">
    <posts></posts>
  </div>
</template>

<script>
import Posts from "../components/Posts";
export default {
   components: {Posts},
   computed: {
      postsList () {
        return this.$store.getters.posts
      }
   }
}
</script>

