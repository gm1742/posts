<template>
  <div class="container pt-5 pb-10">
    <post></post>
  </div>
</template>

<script>
import Posts from "../components/Posts";
export default {
   components: {Post: Posts},
   computed: {
      postsList () {
        return this.$store.getters.posts
      }
   }
}
</script>

<style lang="scss" scoped>


</style>
