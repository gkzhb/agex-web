<template>
  <v-container class="mb-12">
    <h2 class="mt-2">我的历史</h2>
    <div class="d-flex flex-wrap">
      <a-card v-for="item in hisList" :key="item.id" :anime="item">
        <div class="text-subtitle-2 text--secondary">
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
            class="text-truncate"
            v-if="item.lastTime"
            v-text="item.lastPos"
            :href="item.lastUrl + '&' + item.lastTime"
            target="_blank"
            width="100"
          />
          <span
            class="ml-2 text-caption text--secondary text-truncate"
            v-text="'更新到 ' + item.other"
          />
        </template>
      </a-card>
    </div>
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
