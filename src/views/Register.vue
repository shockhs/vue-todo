<template>
  <div class="loginform">
    <h1>Register Form</h1>
    <form>
      <div class="input">
        <label for="email">Email:</label>
        <input v-model="email" type="text" id="email" />
      </div>
      <div class="input">
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" />
      </div>
      <button @click="register">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  data: () => {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    ...mapActions(["registerUser"]),
    register: function(event) {
      event.preventDefault();
      this.registerUser({ email: this.email, password: this.password })
        .then(() => {
          this.$router.replace({ name: "Home" });
        })
        .catch(() => {
          console.log("login fail");
        });
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


