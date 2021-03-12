<template>
  <codemirror :value="editorText" @input="update" :options="cmOptions" />
</template>
<script>
import { mapActions, mapState } from "vuex";
import { codemirror } from "vue-codemirror";

// import base style
import "codemirror/lib/codemirror.css";
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
        mode: "text/javascript",
        theme: "base16-dark",
        lineNumbers: true,
        line: true,
        // more CodeMirror options...
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
<style scoped>
textarea {
  height: 100vh;
  width: 100vh;
}
</style>