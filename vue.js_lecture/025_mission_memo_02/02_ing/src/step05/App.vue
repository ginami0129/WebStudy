<template>
  <div id="app">
    <list-page  v-if="mode == 'list'" :setReadMemo="setReadMemo" :list="list"></list-page>
    <read-page v-if="mode == 'read'" :current-memo="selectedMemo" :set-mode="setMode"></read-page>
  </div>
</template>

<script>
import ListPage from "./pages/ListPage";
import ReadPage from "./pages/ReadPage";
import {MODE} from "./common";

export default {
  name: "app",
  components: {
    ListPage,
    ReadPage
  },
  data() {
    return {
      list: ["memo1", "memo2", "memo3"],
      mode: MODE.LIST,
      selectedMemo:""
    };
  },
  methods: {
    setReadMemo(index){
      this.selectedMemo = this.list[index];
      this.setMode(MODE.READ);
    },
    setMode(mode){
      this.mode=mode;
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
