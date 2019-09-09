<template lang="pug">
  el-row
    el-col(:sm="1", :lg="6")
    el-col(:sm="22", :lg="12")
      h1 Starship list
      div(class="search")
        el-input(placeholder="Search" v-model="input", class="search__input")
        el-button(icon="el-icon-search",
          circle,
          class="search__btn",
          @click="search",
          :disabled="!input")
      img(v-if="!starships.length", :src="'/static/image/preloader.gif'")
      link-list(:links="starships")
      el-pagination(
        :hide-on-single-page="false",
        :disabled="starships.length === 0",
        layout="prev, pager, next",
        :total="count",
        :current-page.sync="currentPage",
        @prev-click="handlePageChange",
        @next-click="handlePageChange",
        @current-change="handlePageChange")
</template>

<script>
import LinkList from './LinkList.vue';

export default {
  name: 'starshipList',
  props: {
    starships: {
      type: Array,
      default() {
        return [];
      },
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  components: {
    LinkList
  },
  data() {
    return {
      input: this.$route.query.search,
      currentPage: parseInt(this.$route.query.page, 10),
    };
  },
  methods: {
    handlePageChange(page) {
      this.$router.push({ name: 'home', query: { page } });
    },
    search() {
      this.$router.push({ name: 'home', query: { search: this.input } });
    },
  },
};
</script>

<style>
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin-left: 20%;
  }
  .search__btn {
    margin-left: 10px!important;
  }
  .search__input {
    margin: 20px 0;
  }
</style>
