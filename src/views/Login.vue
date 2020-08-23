<template>
  <v-container>
    <h2>登录</h2>
    <v-form ref="loginForm" v-model="valid">
      <v-text-field
        id="username"
        v-model="loginForm.username"
        prepend-icon="mdi-account"
        name="Username"
        label="用户名"
        :rules="[username => !!username || '用户名为空']"
      ></v-text-field>
      <v-text-field
        id="password"
        v-model="loginForm.password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        prepend-icon="mdi-lock"
        name="Password"
        label="密码"
        @click:append="showPassword = !showPassword"
        :rules="[password => !!password || '密码为空']"
      ></v-text-field>
      <v-btn color="primary" large @click="clickLogin">登录</v-btn>
    </v-form>
  </v-container>
</template>
<script>
import { login } from "../utils/api";
export default {
  data() {
    return {
      valid: true,
      loginForm: {
        username: "",
        password: ""
      },
      showPassword: false
    };
  },
  methods: {
    clickLogin() {
      if (this.$refs.loginForm.validate()) {
        login(this.loginForm).then(() => {
          console.log("登录成功");
          this.$router.push({ name: "Home" });
        });
      }
    }
  }
};
</script>
