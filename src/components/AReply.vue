<template>
  <v-list-item>
    <v-list-item-content>
      <div class="chat_content" v-html="reply.content" />
      <div class="mt-2 text--secondary d-flex justify-space-between">
        <div>
          <span class="mr-4" v-text="reply.userName" />
          <span v-text="toDate(reply.updatedAt)" />
        </div>
        <div>
          <span v-text="'#' + (index + 1)" />
        </div>
      </div>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
import { fromNow } from "../utils/others";

export default {
  name: "AReply",
  props: {
    index: Number,
    reply: Object
  },
  methods: {
    toDate(t) {
      return fromNow(t);
    }
  }
};
</script>
>
