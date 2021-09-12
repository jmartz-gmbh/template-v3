<template>
  <div id="app" class="vp-app">
    <header>
      <div class="container mt-2">
        <div class="row">
          <div class="col-12 mt-2"><Header></Header></div>
        </div>
      </div>
    </header>
    <div class="container mt-2">
      <div class="row">
        <div id="breadcrumb" class="col-12">
          <Breadcrumb></Breadcrumb>
        </div>
        <div id="messages" class="col-12 mt-2"><Messages></Messages></div>
      </div>
    </div>
    <main>
      <div class="container mt-2">
        <div class="row">
          <div class="col-12 pt-2 pb-2"><router-view></router-view></div>
        </div>
      </div>
    </main>
    <footer>
      <div class="container mt-2">
        <div class="row">
          <div class="col-12"><Footer></Footer></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Messages from "@/components/Messages.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Messages,
    Breadcrumb,
  },
  mounted() {
    this.$store.commit("breadcrumb-add", {
      title: "Home",
      to: "/",
    });
  },
};
</script>

<style lang="less">
header > .container,
main > .container,
footer > .container {
  background-color: #ccc;
}
</style>
