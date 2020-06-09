<template>
  <div class="loginform">
    <h1>Login Form</h1>
    <form>
      <div class="input">
        <label for="email">Email:</label>
        <input v-model="email" type="text" id="email" />
      </div>
      <div class="input">
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="Password" />
      </div>
      <button @click="login">Login</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  data: () => {
    return {
      email: "",
      password: ""
    };
  },
  computed: mapGetters(["currentUser"]),
  methods: {
    ...mapActions(["loginUser"]),
    login: function(event) {
      event.preventDefault();
      this.loginUser({ email: this.email, password: this.password });
    }
  },
  updated() {
    if (this.currentUser.is_authenticated) {
      this.$router.go({ path: this.$router.path });
    }
  }
};
</script>


<style lang="scss" scoped>
.loginform {
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .input {
      width: 400px;
      margin-bottom: 20px;
      display: grid;
      grid-template-columns: 20% 80%;
      label {
        text-align: left;
      }
    }
  }
}
</style>


