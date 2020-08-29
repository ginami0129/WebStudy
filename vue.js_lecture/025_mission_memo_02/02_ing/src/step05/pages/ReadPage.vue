<template>
  <div>
    <header-component title="읽기 페이지"></header-component>
    <div>
      선택 메모 = {{currentMemo}}
    </div>
    <button @click="setMode(MODE.LIST)"> 리스트 페이지로 이동</button>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import {MODE} from "../common";
  export default {
    props:{
      currentMemo:{
        type:String,
        default:""
      },
      setMode:{
        type:Function,
        default:()=>{
          alert("이 함수는 재설정 해야합니다.");
        }
      }
    },
    computed:{
      MODE() {
        return MODE;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>