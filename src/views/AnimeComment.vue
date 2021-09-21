<template>
  <v-container class="mb-12">
    <v-dialog v-model="commentDialog" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" fab fixed bottom right v-on="on" v-bind="attrs">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">新评论</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-textarea
              v-model="commentContent"
              label="内容"
              placeholder="阿巴阿巴~"
              rows="4"
              dense
              hide-details
              outlined
              auto-grow
            />
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary darken-1" text @click="submitComment()"
            >确定</v-btn
          >
          <v-btn color="red darken-1" text @click="commentDialog = false"
            >取消</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <h2 v-if="this.$route.query.animeName" class="mb-2">
      <a :href="detailUrl + animeId">{{ this.$route.query.animeName }}</a>
    </h2>
    <v-list>
      <template v-for="(comment, idx) in commentList">
        <v-divider :key="'d-' + idx" v-if="idx != 0" />
        <a-topic :key="idx" :topic="comment" :showTopic="false" />
      </template>
    </v-list>
    <!-- <div class="text-center my-4">
      <v-pagination v-model="page" :length="total" circle @input="changePage" />
    </div> -->
    <to-top-fab :bottom="false" />
  </v-container>
</template>
<script>
import { AGE_DETAIL_URL } from "../utils/config";
import { fromNow, logDebug } from "../utils/others";
import ATopic from "../components/ATopic";
import ToTopFab from "../components/ToTopFab";
import { createTopic, getAnimeComments } from "../utils/api";

export default {
  components: {
    ATopic,
    ToTopFab
  },
  data: () => ({
    commentDialog: false,
    commentContent: "",
    commentList: [],
    total: 0,
    page: 1
  }),
  methods: {
    getAnimeComments(page = 1) {
      getAnimeComments(this.animeId, page).then(resp => {
        this.commentList = resp.articles;
        /* this.total = Math.ceil(
          resp.pagination.total / resp.pagination.pageSize
        ); */
      });
    },
    toDate(t) {
      return fromNow(t);
    },
    toggleReplies(idx) {
      this.show[idx] = !this.show[idx];
    },
    submitComment() {
      if (this.commentContent.trim().length > 0) {
        createTopic(this.commentContent, this.animeId).then(resp => {
          this.$store.dispatch("message/success", "评论成功");
          this.commentDialog = false;
          logDebug(resp);
          this.$router.go();
        });
      } else {
        this.$store.dispatch("message/error", "评论内容不能为空");
      }
    },
    changePage(page) {
      this.getAnimeComments(page);
    }
  },
  computed: {
    animeId() {
      return this.$route.params.animeId;
    },
    detailUrl() {
      return AGE_DETAIL_URL;
    }
  },
  created() {
    this.getAnimeComments();
  }
};
</script>
