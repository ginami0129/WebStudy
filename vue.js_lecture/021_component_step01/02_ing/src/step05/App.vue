<template>
  <div id="app">
    <list-page :list="list2"></list-page>
  </div>
</template>

<script>
/*
	지역 컴포넌트 사용
*/
import ListPage from "./components/ListPage";

export default {
  name: "app",
  data() {
    return {
      list2: ["memo1", "memo2", "memo3"]
    };
  },
  components: {
    ListPage
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
