<template>
  <header class="header">
    <h1>TodoList</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link v-if="!status" to="/login">Login</router-link>
      <router-link v-if="!status" to="/register">Register</router-link>
      <button v-if="status" @click="logout">Logout</button>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  props: {
    status: Boolean
  },
  methods: {
    ...mapActions(["logoutUser"]),
    logout: function(event) {
      event.preventDefault();
      this.logoutUser();
      this.$router.go({ path: this.$router.path });
    }
  }
};
</script>


<style scoped>
.header {
  width: 100vw;
  height: 10vh;
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
</style>


