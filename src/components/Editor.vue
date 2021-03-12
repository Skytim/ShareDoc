<template>
  <codemirror class="" :value="editorText" @input="update" :options="cmOptions" />
</template>
<script>
import { mapActions, mapState } from "vuex";
import { codemirror } from "vue-codemirror";
// import language js
import 'codemirror/mode/javascript/javascript.js'

// import base style
import "codemirror/lib/codemirror.css";
// import base style
import 'codemirror/theme/eclipse.css';
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
        mode: "javascript",
        theme: "eclipse",
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
<style >
.CodeMirror  {
  height: 900vh;
  width: 100vh;
}
</style>