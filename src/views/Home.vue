<template lang="pug">
    starship-list(:starships="starships.results", :count="starships.count")
</template>

<script>
import StarshipList from '@/components/starship-list/StarshipList.vue';

const resolveQuery = (to, from, next, store) => {
  const search = Object.prototype.hasOwnProperty.call(to.query, 'search');
  const page = Object.prototype.hasOwnProperty.call(to.query, 'page');
  const payload = {};
  if (search) {
    payload.search = to.query.search;
  }
  if (page) {
    payload.page = to.query.page;
  }
  store.dispatch('GET_STARSHIPS', payload);
  next();
}

export default {
  name: 'home',
  components: {
    StarshipList,
  },
  beforeRouteUpdate(to, from, next) {
    resolveQuery(to, from, next, this.$store);
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      resolveQuery(to, from, next, vm.$store);
    });
  },
  computed: {
    starships() {
      return this.$store.state.starships;
    },
    error() {
      return this.$store.state.errors.message;
    },
  },
};
</script>
