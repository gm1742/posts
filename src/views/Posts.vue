<template>
  <div class="container pt-5">
    <todo-list
      title="Title"
      body="text"
    ></todo-list>
  </div>
</template>

<script>

import TodoList from "../components/TodoList";

export default {
   components: { TodoList }
}
</script>
