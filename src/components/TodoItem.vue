<template>
  <div class="todo" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <input type="checkbox" v-bind:checked="todo.completed"  />
      {{todo.title}}
      <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
    </p>
  </div>
</template>
 

<script>
import {mapActions} from 'vuex'


export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    ...mapActions(['deleteTodo'])
  }
};
</script>


<style scoped>
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
</style>