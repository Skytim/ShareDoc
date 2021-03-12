<template>
  <textarea :value="getEditorText" @input="update"></textarea>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import _ from "lodash";
export default {
  name: "TextArea",
  methods: {
    debouceUpdate() {
      _.debounce(function () {
        this.update;
      }, 300);
    },
    ...mapActions(["update"]),
  },
  computed: {
    ...mapGetters(["getEditorText"]),
  },
};
</script>
<style scoped>
textarea {
  height: 100vh;
  width: 100vh;
}
</style>