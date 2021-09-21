<template>
  <v-card max-width="350" height="190" class="ma-2">
    <v-row class="full-height align-center ma-0">
      <v-col cols="4" class="d-flex align-center pa-0">
        <a
          :href="detailUrl + anime.fanId"
          target="_blank"
          class="full-width px-2"
        >
          <v-img width="100%" :src="anime.cover"></v-img>
        </a>
      </v-col>
      <v-col
        cols="8"
        class="full-height pa-0 d-flex flex-column justify-space-between"
      >
        <v-card-text class="pb-0 pl-0">
          <a
            class="text-subtitle-1 font-weight-medium d-inline-block text-truncate"
            :href="detailUrl + anime.fanId"
            target="_blank"
            style="max-width: 100%"
            >{{ anime.name }}</a
          >
          <slot></slot>
        </v-card-text>
        <v-card-actions>
          <slot name="actions"></slot>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { AGE_DETAIL_URL } from "../utils/config";

export default {
  name: "ACard",
  props: {
    anime: Object
    // anime: cover, name, fanId, lastUrl, lastPos, lastTime, other, updatedAt, description
  },
  data: () => ({}),
  computed: {
    detailUrl() {
      return AGE_DETAIL_URL;
    }
  }
};
</script>
<style lang="sass" scoped>
.full-width
  width: 100%
.full-height
  height: 100%
</style>
