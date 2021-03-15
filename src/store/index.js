import Vue from "vue";
import Vuex from "vuex";
import marked from "marked";
import hljs from "highlight.js";
import store from "store2";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        editorText: store.get("editorText") || "",
    },
    mutations: {
        update(state, value) {
            store.set("editorText", value);
            state.editorText = value;
        },
    },
    actions: {
        update(context, e) {
            context.commit("update", e);
        },
    },
    getters: {
        compiledMarkdown(state) {
            return marked(state.editorText, {
                highlight: function(code, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                        return hljs.highlight(lang, code, true).value;
                    } else {
                        return hljs.highlightAuto(code).value;
                    }
                },
            });
        },
        getEditorText(state) {
            return state.editorText;
        },
    },
});
