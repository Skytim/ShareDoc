<template>
  <codemirror
    class=""
    :value="editorText"
    @input="update"
    :options="cmOptions"
  />
</template>
<script>
import { mapActions, mapState } from "vuex";
import { codemirror } from "vue-codemirror";
// import language js
import "codemirror/mode/markdown/markdown.js";

// import base style
import "codemirror/lib/codemirror.css";
// import base style
import "codemirror/theme/eclipse.css";
import _ from "lodash";
export default {
  name: "TextArea",
  components: {
    codemirror,
  },
  data() {
    return {
      cmOptions: {
        tabSize: 4,
        mode: "markdown",
        lineNumbers: true,
        line: true,
        fencedCodeBlockHighlighting: true,
      },
    };
  },
  methods: {
    debouceUpdate() {
      _.debounce(function () {
        this.update;
      }, 300);
    },
    ...mapActions(["update"]),
  },
  computed: {
    ...mapState(["editorText"]),
  },
};
</script>
<style >
.CodeMirror {
  height: 98vh;
  width: 90vh;
}
</style>