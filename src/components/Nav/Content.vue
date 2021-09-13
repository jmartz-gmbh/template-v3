<template>
  <div class="vc-nav-content" v-if="toggle">
    <div class="container mb-2">
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3">
          <router-link to="/impressum" class="btn btn-primary d-block"
            >Impressum</router-link
          >
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <router-link to="/impressum" class="btn btn-primary d-block"
            >Impressum</router-link
          >
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <router-link to="/impressum" class="btn btn-primary d-block"
            >Impressum</router-link
          >
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <router-link to="/impressum" class="btn btn-primary d-block"
            >Impressum</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "NavContent",
    data() {
        return {
            
        }
    },
    computed: {
        toggle: function() {
            return this.$store.state.nav.toggle;
        }
    }
}
</script>