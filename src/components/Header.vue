<template>
  <div class="vc-header">
    <div class="container">
      <div class="row">
        <div class="col-9">
          Home
        </div>
        <div class="col-3">
          <font-awesome-icon v-if="$store.state.nav.toggle" class="float-end" @click="this.$store.commit('nav-toggle')" icon="times" />
          <font-awesome-icon v-if="!$store.state.nav.toggle" class="float-end" @click="this.$store.commit('nav-toggle')" icon="bars" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isMobile: function() {
      return this.$screen.width() < 468;
    },
    isTablet: function() {
      return this.$screen.width() >= 468 && this.$screen.width() <= 1024;
    },
    isDesktop: function() {
      return this.$screen.width() > 1024;
    },
  },
};
</script>
