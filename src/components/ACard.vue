<template>
  <v-card max-width="350" height="190" class="ma-2">
    <v-row class="full-height align-center ma-0">
      <v-col cols="4" class="d-flex align-center pa-0">
        <a
          :href="getDetailUrl(anime.fanId)"
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
          <div class="d-flex">
            <a
              class="text-subtitle-1 font-weight-medium d-inline-block text-truncate"
              :href="getDetailUrl(anime.fanId)"
              target="_blank"
              style="max-width: 80%"
              >{{ anime.name }}</a
            >
            <a
              class="text-subtitle-2 ml-auto"
              :data-aid="anime.fanId"
              :data-name="anime.name"
              @click="goToCommentPage"
              >留言</a
            >
          </div>
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
import { mapGetters } from "vuex";

export default {
  name: "ACard",
  props: {
    anime: Object
    // anime: cover, name, fanId, lastUrl, lastPos, lastTime, other, updatedAt, description
  },
  data: () => ({}),
  computed: {
    ...mapGetters({ ageDetailUrl: "config/ageDetailUrl" })
  },
  methods: {
    getDetailUrl(animeId) {
      return new URL(animeId, this.ageDetailUrl);
    },
    goToCommentPage(event) {
      const el = event.target;
      this.$router.push({
        name: "Comments",
        params: { animeId: el.dataset.aid },
        query: { animeName: el.dataset.name }
      });
    }
  }
};
</script>
