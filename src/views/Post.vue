<template>
  <div class="container">
    <h1>{{post.title}}</h1>
    <div class="text-left user mb-5">
      <div>id: {{post.id}}</div>
    </div>
    <div class="text-left user mb-10">
      <div>User {{post.userId}}</div>
    </div>
    <div class="text">
      {{post.body[0].toUpperCase() + post.body.slice(1)}}
    </div>
  </div>
</template>

<script>
   export default {
      data () {
         return {
            id: this.$route.params.id
         }
      },
      computed: {
         post () {
            const id = this.id
            return this.$store.getters.postById(id)
         }
      }
   }
</script>

<style scoped lang="scss">
  h1{
    text-transform: uppercase;
  }
  .text{
    text-align: left;
  }
  .user{
    color: #ccc;
  }
</style>
