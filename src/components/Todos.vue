<template>
  <div>
    <div class="todos">
      <div :key="todo.id" v-for="todo in allTodos">
        <TodoItem :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["fetchTodos"])
  },
  components: {
    TodoItem: TodoItem
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>