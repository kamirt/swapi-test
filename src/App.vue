<template lang="pug">
  el-container(id="app")
    el-header
    el-main
      router-view
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
div {
  min-height: 1px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
