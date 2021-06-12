<template>
  <v-container class="mb-12">
    <v-dialog v-model="topicDialog" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" fab fixed bottom right v-on="on" v-bind="attrs">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">新主题</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-textarea
              v-model="topicContent"
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
          <v-btn color="primary darken-1" text @click="submitTopic()"
            >确定</v-btn
          >
          <v-btn color="red darken-1" text @click="topicDialog = false"
            >取消</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-list>
      <template v-for="(topic, idx) in chatList">
        <v-divider :key="'d-' + idx" v-if="idx != 0" />
        <a-topic :key="idx" :topic="topic" />
      </template>
    </v-list>
    <div class="text-center my-4">
      <v-pagination v-model="page" :length="total" circle @input="changePage" />
    </div>
    <to-top-fab :bottom="false" />
  </v-container>
</template>
<script>
import { getChatTopicList, createTopic } from "../utils/api";
import { fromNow } from "../utils/others";
import ATopic from "../components/ATopic";
import ToTopFab from "../components/ToTopFab";

export default {
  components: {
    ATopic,
    ToTopFab
  },
  data: () => ({
    topicDialog: false,
    topicContent: "",
    chatList: [],
    total: 0,
    page: 1
  }),
  methods: {
    getChatTopics(page = 1) {
      getChatTopicList(page).then(resp => {
        this.chatList = resp.articles.rows;
        this.total = Math.ceil(
          resp.pagination.total / resp.pagination.pageSize
        );
      });
    },
    toDate(t) {
      return fromNow(t);
    },
    toggleReplies(idx) {
      this.show[idx] = !this.show[idx];
    },
    submitTopic() {
      if (this.topicContent.trim().length > 0) {
        createTopic(this.topicContent).then(() => {
          this.$store.dispatch("message/success", "主题创建成功");
        });
      } else {
        this.$store.dispatch("message/error", "主题内容不能为空");
      }
    },
    changePage(page) {
      this.getChatTopics(page);
    }
  },
  created() {
    this.getChatTopics();
  }
};
</script>
<style lang="sass">
.chat_content img
  max-width: 70% !important
.chat_content
  max-width: 100% !important
  line-height: 1.5
  word-break: break-all
.chat_content iframe
  max-width: 100% !important
</style>
