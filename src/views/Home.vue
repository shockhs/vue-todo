<template>
  <div id="app">
    <AddTodo />
    <FilterTodos />
    <Todos />
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import FilterTodos from "../components/FilterTodos";

export default {
  name: "App",
  components: {
    Todos: Todos,
    AddTodo: AddTodo,
    FilterTodos: FilterTodos
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}

body {
  line-height: 1.4;
  width: 100vw;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  -moz-osx-font-smoothing: grayscale;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
img,
em {
  padding: 0;
  margin: 0;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
