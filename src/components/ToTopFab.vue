<template>
  <v-fab-transition>
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      aria-label="Scroll to top"
      bottom
      :style="{
        bottom: bottom ? '' : '80px'
      }"
      :color="bottom ? 'primary' : 'red'"
      dark
      fab
      fixed
      right
      title="返回顶部"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
// reference: https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/layouts/default/FabToTop.vue
export default {
  name: "ToTopFab",
  props: {
    bottom: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({ fab: false }),
  methods: {
    onScroll() {
      if (typeof window === "undefined") return;

      const top = window.pageYOffset || document.documentElement.offsetTop || 0;

      this.fab = top > 300;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
