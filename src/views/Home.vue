<template>
  <v-container>
    <h2>我的收藏</h2>
    <v-container>
      <v-row dense>
        <v-col v-for="item in favList" :key="item.id" xs="12" md="6" lg="4">
          <v-card :href="detailUrl + item.BangumiData.fanId">
            <v-container>
              <v-row justify="space-between">
                <v-col cols="6">
                  <v-img :src="item.BangumiData.cover"> </v-img>
                </v-col>
                <v-col cols="6">
                  <v-card-title
                    v-text="item.BangumiData.name"
                    :to="detailUrl + item.BangumiData.fanId"
                  />
                  <v-card-subtitle
                    class="pb-0"
                    v-text="
                      item.BangumiData.region + ' | ' + item.BangumiData.state
                    "
                  />
                  <v-card-text
                    class="text--primary des"
                    v-text="item.BangumiData.description"
                  >
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      text
                      color="primary"
                      v-if="item.lastTime"
                      v-text="'继续看' + item.lastPos"
                      :href="item.lastUrl + '&' + item.lastTime"
                    />
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { getFavoriteList } from "../utils/api";
import { AGE_DETAIL_URL } from "../utils/config";
export default {
  name: "Home",
  components: {},
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
<style scoped>
.des {
  display: -webkit-box;
  max-height: 4.125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
