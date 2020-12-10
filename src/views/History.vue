<template>
  <v-container class="mb-12">
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
        <a-card :anime="item">
          <div class="text-subtitle-1 text--secondary">
            看到
            <a :href="item.lastUrl + '&' + item.lastTime">{{
              item.lastTime.indexOf("00") === 0
                ? item.lastTime.substring(3)
                : item.lastTime
            }}</a>
            | {{ toDate(item.updatedAt) }}
          </div>
          <template v-slot:actions>
            <v-btn
              text
              color="primary"
              v-if="item.lastTime"
              v-text="'继续看' + item.lastPos"
              :href="item.lastUrl + '&' + item.lastTime"
              target="_blank"
            />
            <v-btn text disabled v-text="'更新到 ' + item.other" />
          </template>
        </a-card>
      </v-col>
    </v-row>
    <to-top-fab />
  </v-container>
</template>

<script>
import { getHistoryList } from "../utils/api";
import { AGE_DETAIL_URL } from "../utils/config";
import { fromNow } from "../utils/others";
import ACard from "@/components/ACard";
import ToTopFab from "../components/ToTopFab";

export default {
  name: "History",
  components: {
    ACard,
    ToTopFab
  },
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
      return fromNow(t);
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
