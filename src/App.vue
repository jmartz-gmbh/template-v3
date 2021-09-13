<template>
  <div id="app">
    <header>
      <div class="container mt-2 px-0">
        <div class="row">
          <div class="col-12 mt-2"><Header></Header></div>
          <div class="col-12 mt-2"><NavContent></NavContent></div>
        </div>
      </div>
    </header>
    <div v-if="messages" class="container mt-2 px-0">
      <div class="row">
        <div id="messages" class="col-12 mt-2"><Messages></Messages></div>
      </div>
    </div>
    <main>
      <div class="container mt-2 px-0">
        <div class="row">
          <div v-if="breadcrumbs" class="col-12 pt-2 pb-2"><Breadcrumb></Breadcrumb></div>
          <div class="col-12 pt-2 pb-2"><router-view></router-view></div>
        </div>
      </div>
    </main>
    <footer>
      <div class="container mt-2 px-0">
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
import NavContent from "@/components/Nav/Content.vue";

import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Messages,
    Breadcrumb,
    NavContent,
  },
  watch: {
    $route: function() {
      // todo fix bug reset onload
      this.$store.commit("breadcrumb-reset");
    },
  },
  computed: {
    messages: function() {
      return this.$store.state.messages.items;
    },
    breadcrumbs: function() {
      return this.$store.state.breadcrumb.items;
    },
  },
  mounted() {
    this.$store.commit("breadcrumb-reset");
    this.$store.commit("breadcrumb-add", {
      title: "Home",
      to: "/",
    });
    this.$store.commit("message-add", {
      text: "hallo Welt",
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

a {
  text-decoration: none;
}
</style>
