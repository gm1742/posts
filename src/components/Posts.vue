<template>
  <div class="d-flex flex-wrap justify-space-between">
    <div
            class="card mb-5"
            v-for="post of postsList"
            :key="post.id"
    >
      <router-link :to="'/' + post.id">
        <div class="title">{{post.title}}</div>
        <div class="content">{{post.body[0].toUpperCase() + post.body.slice(1)}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
 export default {
    computed: {
       postsList () {
          return this.$store.getters.posts
       }
    }
 }
</script>

<style lang="scss" scoped>


</style>
