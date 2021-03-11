import Vue from "vue";
import Vuex from "vuex";
import marked from "marked";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        editorText: "",
    },
    mutations: {
        update(state, value) {
            state.editorText = value;
        },
    },
    actions: {
        update(context, e) {
          context.commit("update", e.target.value);
        },
    },
    getters: {
        compiledMarkdown(state) {
            return marked(state.editorText);
        },
        getEditorText(state) {
            return state.editorText;
        },
    },
});
