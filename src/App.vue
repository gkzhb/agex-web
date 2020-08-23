<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div>{{ title }}</div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav>
        <v-list-item v-for="item in navList" :key="item.title" :to="item.to">{{
          item.title
        }}</v-list-item>
        <v-list-item v-if="loggedIn" @click="clickLogout">登出</v-list-item>
        <v-list-item v-else :to="{ name: 'Login' }">登录</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapState(["title"]),
    ...mapGetters(["loggedIn"]),
    ...mapMutations(["logout"]),
    navList() {
      if (this.loggedIn) {
        return [
          {
            title: "收藏",
            to: { name: "Home" }
          },
          {
            title: "历史",
            to: { name: "History" }
          }
        ];
      } else {
        return [];
      }
    }
  },
  methods: {
    clickLogout() {
      this.logout();
      this.$router.push({ name: "Login" });
    }
  }
};
</script>
