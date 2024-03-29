<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon href="https://github.com/gkzhb/agex-web" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon @click="setDarkMode()">
        <v-icon v-text="darkMode ? 'mdi-power-sleep' : 'mdi-weather-sunny'" />
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense flat>
        <h3 class="my-2 ml-2" v-text="loggedIn ? username : '游客'" />
        <v-list-item-group v-model="group" color="primary" disabled>
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
          <v-list-item v-if="loggedIn" @click="clickLogout">
            <v-list-item-icon>
              <v-icon>mdi-account-arrow-right</v-icon>
            </v-list-item-icon>
            <v-list-item-title>登出</v-list-item-title>
          </v-list-item>
          <template v-else>
            <v-list-item :to="{ name: 'Login' }">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>登录</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'Register' }">
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
import { sidebarRoutes } from "./utils/constant";
export default {
  name: "App",
  components: {
    Message
  },
  data: () => ({
    drawer: false,
    group: 0
  }),
  created() {
    this.$vuetify.theme.dark = this.darkMode;
    Vue.prototype.$message = this.$refs.message;
  },
  computed: {
    ...mapState(["title"]),
    ...mapGetters(["loggedIn", "username"]),
    ...mapGetters("config", ["darkMode"]),
    navList() {
      if (this.loggedIn) {
        return [
          sidebarRoutes.fav,
          sidebarRoutes.history,
          sidebarRoutes.chat,
          sidebarRoutes.settings,
          sidebarRoutes.about
        ];
      } else {
        return [
          sidebarRoutes.settings,
          sidebarRoutes.chat,
          sidebarRoutes.about
        ];
      }
    }
  },
  methods: {
    ...mapActions(["logout"]),
    clickLogout() {
      this.logout();
    },
    setDarkMode() {
      this.dark = !this.dark;
      this.$vuetify.theme.dark = this.dark;
      this.$store.commit("config/setDarkMode", this.dark);
    }
  }
};
</script>
<style lang="sass">
.full-width
  width: 100%
.max-full-width
  max-width: 100%
.full-height
  height: 100%
.d-contents
  display: contents
</style>
