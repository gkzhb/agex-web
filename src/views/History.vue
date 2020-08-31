<template>
  <v-container>
    <v-row class="mt-2">
      <v-col>
        <h2>我的历史</h2>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col
        v-for="item in hisList"
        cols="12"
        :key="item.id"
        xs="12"
        md="6"
        lg="4"
      >
        <v-card :href="detailUrl + item.fanId">
          <v-row justify="space-between">
            <v-col cols="4">
              <v-img width="100%" :src="item.cover"> </v-img>
            </v-col>
            <v-col cols="8" class="pl-0">
              <v-card-title
                v-text="item.name"
                :to="detailUrl + item.fanId"
                class="pt-0"
              />
              <v-card-subtitle class="pb-0"
                >看到
                <a :href="item.lastUrl + '&' + item.lastTime">{{
                  item.lastTime.indexOf("00") === 0
                    ? item.lastTime.substring(3)
                    : item.lastTime
                }}</a>
                | {{ toDate(item.updatedAt) }}</v-card-subtitle
              >
              <v-card-text class="text--primary" v-text="item.description">
              </v-card-text>
              <v-card-text class="py-0">
                <v-btn
                  text
                  color="primary"
                  v-if="item.lastTime"
                  v-text="'继续看' + item.lastPos"
                  :href="item.lastUrl + '&' + item.lastTime"
                />
                <v-btn text disabled v-text="'更新到 ' + item.other" />
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getHistoryList } from "../utils/api";
import { AGE_DETAIL_URL } from "../utils/config";
import dayjs from "../plugins/dayjs";

export default {
  name: "History",
  components: {},
  data() {
    return {
      hisList: []
    };
  },
  methods: {
    getHistory() {
      getHistoryList().then(resp => {
        this.hisList = resp;
      });
    },
    toDate(t) {
      const dt = dayjs(t);
      return dt.fromNow() + " " + dt.format("HH:mm:ss");
    }
  },
  computed: {
    detailUrl() {
      return AGE_DETAIL_URL;
    }
  },
  created() {
    this.getHistory();
  },
  filters: {}
};
</script>
