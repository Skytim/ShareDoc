<template>
    <div class="row">
      <div class="col">
        <Editor />
      </div>
      <div class="col overflow-auto display">
          <div v-html="compiledMarkdown"></div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Editor from "../components/Editor";
export default {
  name: "App",
  components: {
    Editor,
  },
  computed: {
    ...mapGetters({
      compiledMarkdown: "compiledMarkdown",
    }),
  },
};
</script>

<style scoped>
/* The solution */
.row {
  overflow: hidden;
}
.display {
  height: 98vh;
  width: 90vh;
}
</style>