<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="setDarkMode()">
        <v-icon v-text="dark ? 'mdi-power-sleep' : 'mdi-weather-sunny'" />
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense flat>
        <v-list-item-group v-model="group" color="primary">
          <v-list-item
            v-for="item in navList"
            :key="item.title"
            :to="item.to"
            exact
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" />
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          <v-list-item :key="2" v-if="loggedIn" @click="clickLogout">
            <v-list-item-icon>
              <v-icon>mdi-account-arrow-right</v-icon>
            </v-list-item-icon>
            <v-list-item-title>登出</v-list-item-title>
          </v-list-item>
          <template v-else>
            <v-list-item :key="3" :to="{ name: 'Login' }">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>登录</v-list-item-title>
            </v-list-item>
            <v-list-item :key="4" :to="{ name: 'Register' }">
              <v-list-item-icon>
                <v-icon>mdi-account-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-title>注册</v-list-item-title>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
      <message ref="message" />
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Vue from "vue";
import Message from "./components/Message";
export default {
  name: "App",
  components: {
    Message
  },
  data: () => ({
    drawer: false,
    group: 0,
    dark: false
  }),
  created() {
    this.dark = this.darkMode;
    this.$vuetify.theme.dark = this.darkMode;
    Vue.prototype.$message = this.$refs.message;
  },
  computed: {
    ...mapState(["title"]),
    ...mapGetters(["loggedIn", "darkMode"]),
    navList() {
      if (this.loggedIn) {
        return [
          {
            title: "追番",
            icon: "mdi-heart",
            to: { name: "Home" }
          },
          {
            title: "历史",
            icon: "mdi-clock-fast",
            to: { name: "History" }
          }
        ];
      } else {
        return [];
      }
    }
  },
  methods: {
    ...mapActions(["logout"]),
    clickLogout() {
      this.logout();
      this.$router.push({ name: "Login" });
    },
    setDarkMode() {
      this.dark = !this.dark;
      this.$vuetify.theme.dark = this.dark;
      this.$store.commit("setDarkMode", this.dark);
    }
  }
};
</script>