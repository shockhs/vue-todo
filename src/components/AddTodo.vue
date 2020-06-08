<template>
  <div>
    <form @submit="addTodo">
      <input v-model="title" name="title" placeholder="Add Todo..." type="text" />
      <button type="submit" class="btn">Submit</button>
    </form>
  </div>
</template>

<script>
//import { v4 as uuidv4 } from 'uuid';

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(event) {
        event.preventDefault()
        const newTodo = {
            title:this.title,
            completed:false
        }
        this.$emit('add-todo',newTodo)
        this.title=''
    }
  }
};
</script>


<style scoped>
form {
  width: 100%;
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}
</style>