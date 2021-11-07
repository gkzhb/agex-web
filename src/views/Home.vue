<template>
  <v-container class="mb-12">
    <h2 class="mt-2">我的追番</h2>
    <v-container class="d-flex flex-wrap">
      <a-card v-for="item in favList" :key="item.id" :anime="item.BangumiData">
        <div
          class="text--secondary"
          v-text="item.BangumiData.region + ' | ' + item.BangumiData.state"
        />
        <div
          class="text--primary des"
          style="max-width: 100%"
          v-text="item.BangumiData.description"
        />
        <template v-slot:actions>
          <v-btn
            text
            color="primary"
            v-if="item.lastTime"
            v-text="'继续看' + item.lastPos"
            :href="getLastUrl(item.lastUrl, item.lastTime)"
          />
          <v-btn text disabled v-else v-text="'未观看'" />
        </template>
      </a-card>
    </v-container>
    <to-top-fab />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { getFavoriteList } from "../utils/api";
import ACard from "@/components/ACard";
import ToTopFab from "../components/ToTopFab";
import { getLastUrl } from "../utils/others";

export default {
  name: "Home",
  components: {
    ACard,
    ToTopFab
  },
  data() {
    return {
      favList: []
    };
  },
  computed: {
    ...mapGetters({ ageBaseUrl: "config/ageBaseUrl" })
  },
  methods: {
    getDetailUrl(animeId) {
      return new URL(animeId, this.ageDetailUrl);
    },
    getLastUrl(lastUrl, lastTime) {
      return getLastUrl(this.ageBaseUrl, lastUrl, lastTime);
    },
    getFavs() {
      getFavoriteList().then(resp => {
        this.favList = resp;
      });
    }
  },
  created() {
    this.getFavs();
  }
};
</script>
<style lang="sass" scoped>
.des
  display: -webkit-box
  overflow: hidden
  text-overflow: ellipsis
  -webkit-line-clamp: 3
  -webkit-box-orient: vertical
</style>
