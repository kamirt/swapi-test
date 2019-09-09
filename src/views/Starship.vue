<template lang="pug">
  el-row
    el-col(:sm="1", :lg="6")
    el-col(:sm="22", :lg="12")
      key-value-tree()
</template>

<script>
import KeyValueTree from '@/components/starship/KeyValueTree.vue';

export default {
  name: 'starship',
  components: {
    KeyValueTree,
  },
};
</script>
