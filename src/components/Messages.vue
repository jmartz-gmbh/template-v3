<template>
  <div class="vc-messages">
    <div v-for="(item, index) in items" :key="index" class="alert alert-success">Test</div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "Messages",
  setup() {
    let items = ref([]);

    return {
      items,
    };
  },
};
</script>
