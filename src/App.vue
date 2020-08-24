<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div>{{ title }}</div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense flat>
        <v-list-item-group v-model="group" color="primary">
          <v-list-item v-for="item in navList" :key="item.title" :to="item.to">
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
          <v-list-item :key="3" v-else :to="{ name: 'Login' }">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>登录</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
    group: 0
  }),
  computed: {
    ...mapState(["title"]),
    ...mapGetters(["loggedIn"]),
    navList() {
      if (this.loggedIn) {
        return [
          {
            title: "收藏",
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
    }
  }
};
</script>
