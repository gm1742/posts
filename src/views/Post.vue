<template>
  <div class="container">
    <h2>{{title}}titledsfdsf</h2>
    <div class="d-flex">
      <div>User</div>
      <div>{{userId}}</div>
    </div>
    <div class="text">
      {{body}}
    </div>
  </div>
</template>

<script>
   export default {
      props: ['title', 'userId', 'body']
   }
</script>

<style scoped>

</style>
