<template>
  <v-list-item :key="topic.id">
    <v-list-item-content>
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
        <div class="d-flex justify-space-between">
          <div class="flex-grow-1">
            <v-text-field
              v-model="replyContent"
              label="回复"
              dense
              hide-details
              outlined
              color="primary"
              class="reply_input"
            />
          </div>
          <v-btn class="ml-2 primary--text" text @click.stop="submitReply()"
            >提交</v-btn
          >
        </div>
        <v-list class="pl-4">
          <template v-for="(reply, i) in topic.Comments">
            <v-divider v-if="i != 0" :key="'d' + i" />
            <v-list-item :key="i">
              <v-list-item-content>
                <div class="chat_content" v-html="reply.content" />
                <div class="mt-2 text--secondary d-flex justify-space-between">
                  <div>
                    <span class="mr-4" v-text="reply.userName" />
                    <span v-text="toDate(reply.updatedAt)" />
                  </div>
                  <div>
                    <span v-text="'#' + (i + 1)" />
                  </div>
                </div>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </div>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
import { fromNow } from "../utils/others";
import { createReply } from "../utils/api";

export default {
  name: "ATopic",
  props: {
    topic: Object
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
          this.topic.comments.push(resp);
        });
      } else {
        this.$store.dispatch("message/error", "回复内容不能为空");
      }
    }
  }
};
</script>
<style lang="sass" scoped>
.reply_input
  width: 100%
  display: inline-block
</style>
