<template>
  <div>
    <list-header></list-header>리스트 페이지 입니다.
    <list-footer></list-footer>
  </div>
</template>

<script>
import ListFooter from "./ListFooter";
import ListHeader from "./ListHeader";

export default {
  components: {
    ListFooter,
    ListHeader
  }
};
</script>

<style scoped>
</style>