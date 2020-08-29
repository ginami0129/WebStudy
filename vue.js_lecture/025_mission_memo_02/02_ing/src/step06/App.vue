<template>
  <div id="app">
    <list-page v-if="mode == MODE.LIST" 
    :list="list"
    :setReadMemo="setReadMemo" 
    :setMode="setMode" ></list-page>
    <read-page v-if="mode == MODE.READ" 
    :current-memo="selectedMemo" 
    :set-mode="setMode"></read-page>
    <write-page v-if="mode == MODE.WRITE" :addMemo="addMemo" :setMode="setMode"></write-page>
  </div>
</template>

<script>
import ListPage from "./pages/ListPage";
import ReadPage from "./pages/ReadPage";
import WritePage from "./pages/WritePage";
import { MODE } from "./common";

export default {
  name: "app",
  components: {
    ListPage,
    ReadPage,
    WritePage,
  },
  data() {
    return {
      list: ["memo1", "memo2", "memo3"],
      mode: MODE.LIST,
      selectedMemo: ""
    };
  },
  methods: {
    setReadMemo(index) {
      this.selectedMemo = this.list[index];
      this.setMode(MODE.READ);
    },
    setMode(mode) {
      this.mode = mode;
    },
    addMemo(newMemo) {
      this.list.push(newMemo);
      this.setMode(MODE.LIST);
    }
  },
  computed:{
    MODE() {
      return MODE;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
