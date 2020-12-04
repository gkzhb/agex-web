<template>
  <v-container>
    <v-row class="mt-2">
      <v-col>
        <h2>我的追番</h2>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col
        v-for="item in favList"
        cols="12"
        :key="item.id"
        xs="12"
        sm="6"
        lg="4"
      >
        <a-card :anime="item.BangumiData">
          <div
            class="text--secondary"
            v-text="item.BangumiData.region + ' | ' + item.BangumiData.state"
          />
          <div
            class="text--primary des"
            v-text="item.BangumiData.description"
          />
          <template v-slot:actions>
            <v-btn
              text
              color="primary"
              v-if="item.lastTime"
              v-text="'继续看' + item.lastPos"
              :href="item.lastUrl + '&' + item.lastTime"
            />
          </template>
        </a-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getFavoriteList } from "../utils/api";
import { AGE_DETAIL_URL } from "../utils/config";
import ACard from "@/components/ACard";
export default {
  name: "Home",
  components: {
    ACard
  },
  data() {
    return {
      favList: []
    };
  },
  methods: {
    getFavs() {
      getFavoriteList().then(resp => {
        this.favList = resp;
      });
    }
  },
  computed: {
    detailUrl() {
      return AGE_DETAIL_URL;
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
  max-height: 7.125rem
  overflow: hidden
  text-overflow: ellipsis
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
</style>
