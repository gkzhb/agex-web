<template>
  <v-list-item :key="topic.id">
    <v-list-item-content>
      <div
        class="mt-2 d-contents text-subtitle-1 font-weight-bold"
        v-if="showTopic && topic.Bangumi"
      >
        <a
          class="pl-1 d-inline-block text-truncate max-full-width"
          :data-aid="topic.Bangumi.fanId"
          :data-name="topic.Bangumi.name"
          @click="goToCommentPage"
          ># {{ topic.Bangumi.name }}</a
        >
      </div>
      <div class="mt-2 chat_content" v-html="topic.content" />
      <div class="mt-2 text--secondary d-flex justify-space-between">
        <div class="d-flex align-center">
          <span class="mr-4" v-text="topic.userName" />
          <span v-text="toDate(topic.updatedAt)" />
        </div>
        <div>
          <v-btn text @click.stop="showReply = !showReply"
            >回复({{ topic.Comments ? topic.Comments.length : 0 }})</v-btn
          >
        </div>
      </div>
      <div v-show="showReply" class="mt-2">
        <div class="mb-2 d-flex justify-space-between">
          <div class="flex-grow-1">
            <v-text-field
              v-model="replyContent"
              label="回复"
              dense
              hide-details
              outlined
              color="primary"
              class="d-inline-block full-width"
            />
          </div>
          <v-btn class="ml-2 primary--text" text @click.stop="submitReply()"
            >提交</v-btn
          >
        </div>
        <v-list class="pl-4">
          <template v-for="(reply, i) in sortedComments">
            <v-divider :key="'d' + i" />
            <a-reply :key="reply.id" :reply="reply" :index="i" />
          </template>
        </v-list>
      </div>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
import _ from "lodash";
import { fromNow, logDebug } from "../utils/others";
import { createReply } from "../utils/api";
import AReply from "./AReply";

export default {
  name: "ATopic",
  components: {
    AReply
  },
  props: {
    topic: Object,
    showTopic: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    showReply: false,
    replyContent: ""
  }),
  methods: {
    toDate(t) {
      return fromNow(t);
    },
    submitReply() {
      if (this.replyContent.trim().length > 0) {
        createReply(this.topic.id, this.replyContent).then(resp => {
          this.replyContent = "";
          this.$store.dispatch("message/success", "回复成功");
          logDebug(resp);
          this.$router.go();
        });
      } else {
        this.$store.dispatch("message/error", "回复内容不能为空");
      }
    },
    goToCommentPage(event) {
      const el = event.target;
      this.$router.push({
        name: "Comments",
        params: { animeId: el.dataset.aid },
        query: { animeName: el.dataset.name }
      });
    }
  },
  computed: {
    sortedComments() {
      return this.topic.Comments
        ? _.orderBy(this.topic.Comments, "createdAt")
        : [];
    }
  },
  watch: {
    "topic.id"() {
      // hide replies when paging
      this.showReply = false;
    }
  }
};
</script>
