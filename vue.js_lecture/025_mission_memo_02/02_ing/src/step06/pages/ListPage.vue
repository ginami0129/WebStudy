<template>
  <div>
    <header-component title="리스트페이지"></header-component>
    <div>
      리스트 콘텐츠
      <ul>
        <li
          v-for="(memo, index) in list"
          :key="index"
          @click="setReadMemo(index)"
        >{{index}}. {{memo}}</li>
      </ul>
    </div>
    <div>
      <button @click="setMode(MODE.WRITE)">메모 추가</button>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import {MODE} from "../common";
export default {
  props: {
    list: {
      type: Array,
      default: []
    },
    setReadMemo: {
      type: Function,
      default: () => {
        alert("이 메서드는 외부에서 구현되어야 합니다.");
      }
    },
    setMode: {
      type: Function,
      default: () => {
        alert("이 메서드는 외부에서 구현되어야 합니다.");
      }
    }
  },
  computed:{
    MODE() {
      return MODE;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>