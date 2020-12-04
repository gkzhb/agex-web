<template>
  <v-card>
    <v-row justify="space-between">
      <v-col cols="4" class="d-flex align-center">
        <a :href="detailUrl + anime.fanId" target="_blank" class="full_wid">
          <v-img class="ma-3" width="100%" :src="anime.cover"></v-img>
        </a>
      </v-col>
      <v-col cols="8" class="pl-0 d-flex flex-column">
        <div class="mb-auto">
          <v-card-text>
            <div>
              <a
                class="text-h6 anime_title_text"
                :href="detailUrl + anime.fanId"
                target="_blank"
                >{{ anime.name }}</a
              >
            </div>
            <slot></slot>
          </v-card-text>
        </div>
        <div>
          <v-card-actions>
            <slot name="actions"></slot>
          </v-card-actions>
        </div>
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
.full_wid
  width: 100%
.anime_title_text
  display: -webkit-box
  overflow: hidden
  text-overflow: ellipsis
  -webkit-line-clamp: 1
  -webkit-box-orient: vertical
</style>
