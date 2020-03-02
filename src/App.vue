<template>
  <div id="app">
    <div id="vditor" style="height: 480px;background-color: #f6f8fa"></div>
    <button @click="getMarkdownText()">打印</button>
  </div>
</template>

<script>
import Vditor from "vditor";
export default {
  name: "App",
  components: {},
  data() {
    return {
      editor: null
    };
  },
  methods: {
    initEditor() {
      window.vditor = new Vditor("vditor", {
        debugger: false,
        typewriterMode: false,
        placeholder: "placeholder",
        counter: 100,
        height: 500
      });
    },
    getMarkdownText() {
      this.editor = window?.vditor;
      console.log(this.editor.getValue());
    }
  },
  mounted() {
    this.initEditor();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
