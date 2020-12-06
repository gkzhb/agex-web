<template>
  <v-container>
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
  </v-container>
</template>
<script>
import { getChatTopicList, createTopic } from "../utils/api";
import { fromNow } from "../utils/others";
import ATopic from "../components/ATopic";

export default {
  components: {
    ATopic
  },
  data: () => ({
    topicDialog: false,
    topicContent: "",
    chatList: []
  }),
  methods: {
    getChatTopics() {
      getChatTopicList(1).then(resp => {
        this.chatList = resp.articles.rows;
      });
    },
    toDate(t) {
      return fromNow(t);
    },
    toggleReplies(idx) {
      console.log(idx, this.show[idx]);
      this.show[idx] = !this.show[idx];
      console.log(idx, this.show[idx]);
    },
    submitTopic() {
      if (this.topicContent.trim().length > 0) {
        createTopic(this.topicContent).then(() => {
          this.$store.dispatch("message/success", "主题创建成功");
        });
      }
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
.chat_content iframe
  max-width: 100% !important
</style>
