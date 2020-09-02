<template>
  <v-container>
    <v-row class="v-flex" justify="center">
      <v-col lg="4" md="6" sm="9" xs="12">
        <h2>注册</h2>
        <v-form ref="regForm" v-model="valid" @keyup.native.enter="clickReg">
          <v-text-field
            id="username"
            v-model="regForm.username"
            prepend-icon="mdi-account"
            name="Username"
            label="用户名"
            :rules="[
              username => !!username || '用户名为空',
              username => username.length >= 5 || '用户名不能少于5个字符'
            ]"
          ></v-text-field>
          <v-text-field
            id="password"
            v-model="regForm.password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            name="Password"
            label="密码"
            @click:append="showPassword = !showPassword"
            :rules="rules"
          ></v-text-field>
          <v-text-field
            id="passwordAgain"
            v-model="regForm.passwordAgain"
            :append-icon="showPasswordAgain ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPasswordAgain ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            name="Password"
            label="再次输入密码"
            @click:append="showPasswordAgain = !showPasswordAgain"
            :rules="rules"
          ></v-text-field>
          <v-btn
            class="mt-2"
            width="100%"
            color="primary"
            large
            @click="clickReg"
            >注册</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { register } from "../utils/api";
export default {
  data() {
    return {
      valid: true,
      regForm: {
        username: "",
        password: "",
        passwordAgain: ""
      },
      showPassword: false,
      showPasswordAgain: false,
      rules: [
        password => !!password || "密码为空",
        password => password.length >= 5 || "密码不能少于5个字符",
        this.passwordConfirmationRule
      ]
    };
  },
  methods: {
    clickReg() {
      if (this.$refs.regForm.validate()) {
        register(this.regForm).then(res => {
          console.log("注册成功");
          this.$store.dispatch("message/success", res.message);
          this.$router.push({ name: "Login" });
        });
      }
    },
    passwordConfirmationRule() {
      return (
        this.regForm.password === this.regForm.passwordAgain || "两次密码不一致"
      );
    }
  }
};
</script>
