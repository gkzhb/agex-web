<template>
  <v-container>
    <v-row class="v-flex" justify="center">
      <v-col lg="4" md="6" sm="9" xs="12">
        <h2>登录</h2>
        <v-form
          ref="loginForm"
          v-model="valid"
          @submit="logEvent"
          @keyup.native.enter="clickLogin"
        >
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
          <v-btn
            class="mt-2"
            width="100%"
            color="primary"
            large
            @click="clickLogin"
            >登录</v-btn
          >
          <div class="text--secondary mt-4">
            没有帐号？
            <router-link :to="{ name: 'Register' }">来注册一个吧！</router-link>
          </div>
        </v-form>
      </v-col>
    </v-row>
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
        login(this.loginForm)
          .then(res => {
            console.log("登录成功", res.message);
            this.$store.dispatch("message/success", res.message);
            this.$router.push({ name: "Home" });
          })
          .catch(err => {
            console.log("登录失败", err.message);
          });
      }
    },
    logEvent(event) {
      console.log(event);
    }
  }
};
</script>
