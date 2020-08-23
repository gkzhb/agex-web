<template>
  <v-container>
    <h2>登录</h2>
    <v-form ref="loginForm" v-model="loginForm">
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
        :error-messages="errorMsgs"
        :error="error"
      ></v-text-field>
      <v-btn color="primary" large @click="clickLogin">登录</v-btn>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    clickLogin() {
      if (this.$refs.loginForm.validate()) {
        // TODO: login
      }
    }
  }
};
</script>
