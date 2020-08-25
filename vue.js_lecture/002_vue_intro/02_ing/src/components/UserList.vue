<template>
  <div>
    <div v-if="users.length==0">
      사용자가 없습니다.
    </div>
    <ul v-else>
      <li v-for="name in users" :key="name">{{name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    users:{
      type:Array,
      default:[]
    }
  }
};
</script>

<style scoped>
ul {
  text-align: left;
}
</style>