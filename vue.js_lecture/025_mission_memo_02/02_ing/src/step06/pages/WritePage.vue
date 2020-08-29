<template>
  <div>
    <header-component title="쓰기 페이지"></header-component>
    <div>
      <textarea v-model="memo"></textarea>
      <div>
        <button @click="onAddMemo">저장</button>
        <button @click="onCancel">취소</button>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import {MODE} from "../common";
  export default {
    data() {
      return {
        memo:""
      }
    },props:{
      addMemo: {
        type:Function,
        default: () => {
          alert("이 함수는 재설정 되어야 합니다.");
        }
      },
      setMode: {
        type:Function,
        default: () => {
          alert("이 함수는 재설정 되어야 합니다.");
        }
      },
    },
    methods:{
      onAddMemo(){
        this.addMemo(this.memo);
        this.setMode(MODE.LIST);
      },
      onCancel(){
        this.setMode(MODE.LIST);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>