<template lang="pug">
  div
    el-collapse(v-model="activeRootItem",
      class="collapse")
      el-collapse-item(name="root", :title="items ? items.name || items.title : 'loading...'")
        img(v-if="!items", :src="'/static/image/preloader.gif'")
        div(
          v-for="(item, name, index) in items",
          :key="\`item-${index}\`")
          div(v-if="typeof(item) !== 'object'", class="item")
            div(class="item__name") {{ getNormalizedName(name) }}
            div(
              class="item__view") {{ item }}
          el-collapse(v-else, v-model="activeItem", :accordion="true")
            el-collapse-item(:title="name", :name="name")
              node(v-if="activeItem === name",
                v-for="itemUrl in item",
                :url="itemUrl",
                :expanded="''",
                :parentName="name")
</template>

<script>
export default {
  name: 'node',
  props: {
    url: {
      type: String,
    },
    expanded: {
      type: String,
      default() {
        return 'root';
      },
    },
    parentName: String,
  },
  data() {
    return {
      items: null,
      activeItem: null,
      activeRootItem: this.expanded,
    };
  },
  async created() {
    const url = this.url || this.$route.query.url;
    const response = await fetch(url);
    const json = await response.json();
    this.$set(this.$data, 'items', json);
  },
  methods: {
    getNormalizedName(name) {
      return name.replace(/_/g, ' ').concat(':');
    },
  },
};
</script>

<style>
  .collapse {
    padding-left: 30px;
  }
  .item {
    display: flex;
    align-items: flex-end;
  }
  .item__name {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 1.2rem;
    color: deepskyblue;
  }
  .item__view {
    margin-left: .5rem;
    font-size: 1.1rem;
  }
  .el-collapse-item__header {
    font-size: 1.3rem;
    font-weight: bold;
  }
</style>
