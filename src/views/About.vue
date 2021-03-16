<template>

    <div class="row">
      <div class="col">
        <Editor />
      </div>
      <div class="col">
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