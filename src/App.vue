<template>
  <div id="app">
    <Editor />
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Editor from "./components/Editor";
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