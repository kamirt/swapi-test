<template lang="pug">
  div
    div(v-for="(ship, index) in links")
      el-link(:key="`ship-${index}`")
        router-link(
          :to="{name: 'starship', query: {url: ship.url}}") {{ ship.name }}
</template>

<script>
export default {
  props: {
    links: Array,
  },
};
</script>

<style>
  a {
    text-decoration: none;
    color: #000;
  }
</style>
