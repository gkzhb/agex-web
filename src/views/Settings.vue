<template>
  <v-container>
    <v-form ref="settings" v-model="valid" @submit="submit">
      <v-text-field
        v-model="settingsForm.ageBaseUrl"
        name="AgeBaseUrl"
        label="AGE动漫URL地址"
        hint="留空使用默认URL地址"
        clearable
      />
      <v-switch v-model="settingsForm.darkMode" label="夜间模式" />
      <v-btn class="mt-2" width="100%" color="primary" large type="submit"
        >保存</v-btn
      >
    </v-form>
  </v-container>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      valid: true,
      settingsForm: {
        ageBaseUrl: "",
        darkMode: false
      }
    };
  },
  computed: {
    ...mapGetters("config", ["ageBaseUrl", "darkMode"])
  },
  created() {
    this.settingsForm.ageBaseUrl = this.ageBaseUrl;
    this.settingsForm.darkMode = this.darkMode;
  },
  methods: {
    ...mapMutations("config", ["setDarkMode", "setAgeBaseUrl"]),
    clickSave() {
      let url = this.settingsForm.ageBaseUrl;
      if (url && !/^http(s)?:\/\//.test(url)) {
        url = `https://${url}`;
      }
      try {
        url = url ? new URL(url).toString() : "";
      } catch (e) {
        this.$store.dispatch("message/error", "请输入有效URL地址");
        return false;
      }
      this.settingsForm.ageBaseUrl = url;
      if (url && url !== this.ageBaseUrl) {
        this.setAgeBaseUrl(url);
      }
      if (this.settingsForm.darkMode !== this.darkMode) {
        this.setDarkMode(this.settingsForm.darkMode);
        this.$vuetify.theme.dark = this.settingsForm.darkMode;
      }
      return true;
    },
    submit(e) {
      e.preventDefault();
      if (this.clickSave()) {
        this.$store.dispatch("message/success", "设置保存成功");
      }
    }
  }
};
</script>
