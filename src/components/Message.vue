<template>
  <v-snackbar
    app
    v-model="show"
    :color="color"
    :timeout="timeout"
    @input="update"
    top
    >{{ content }}
    <template #action="scope">
      <v-btn
        v-if="queue.length > 0"
        icon
        @click="showNext"
        v-text="queue.length"
      />
      <v-btn icon v-bind="scope.attrs" @click="close"
        ><v-icon v-text="'mdi-close-circle'"
      /></v-btn>
    </template>
  </v-snackbar>
</template>
<script>
// import { logDebug } from "../utils/others";
export default {
  name: "Message",
  data: () => ({
    show: false,
    toShow: false, // show on next tick
    content: "",
    color: "",
    timeout: -1,
    queue: []
  }),
  created() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case "message/showMessage":
          this.addMessage(state.message);
          break;
        case "message/closeMessage":
          this.close();
          break;
      }
    });
  },
  computed: {},
  methods: {
    close() {
      this.queue = [];
      this.show = false;
    },
    // 添加显示消息
    addMessage(msg) {
      this.queue.push(msg);
      if (!this.toShow && !this.show && this.queue.length > 0) {
        this.showNext();
      }
    },
    // 显示下一条消息
    async showNext() {
      if (this.queue.length > 0) {
        const msg = this.queue.shift();
        this.content = msg.content;
        this.color = msg.color;
        this.timeout = msg.timeout;
        this.show = false;
        this.toShow = true;
        this.$nextTick(() => {
          this.show = true;
          this.toShow = false;
        });
      }
    },
    logState() {
      console.log("msg state:");
      console.log("current show", this.show);
      console.log("queue", JSON.stringify(this.queue));
      console.log("timeout", this.timeout);
    },
    // show 改变
    update(val) {
      if (!val && this.queue.length > 0) {
        this.showNext();
      }
    }
  }
};
</script>
