<template>
  <div class="vp-homepage">
      <div class="grid grid-cols-4">
        <div class="col-span-4 md:col-span-2">
          Homepage
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Homepage",
  data() {
    return {
      
    }
  },
  mounted() {
    this.$store.commit('seo-prepare', {
      title: 'Startseite',
      description: `Willkommen auf der neuen Webseite.`
    });
  },
}
</script>
