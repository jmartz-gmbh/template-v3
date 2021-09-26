<template>
  <div id="app">
    <header>
      <div class="container max-w-5xl px-2 py-2 mx-auto mt-2 bg-gray-400">
        <div class="grid grid-cols-1">
          <div class="col-span-1 mt-2"><Header></Header></div>
          <div class="col-span-1 mt-2"><NavContent></NavContent></div>
        </div>
      </div>
    </header>
    <div v-if="messages" class="container max-w-5xl px-2 py-2 mx-auto mt-2 bg-gray-400">
      <div class="grid grid-cols-1">
        <div id="messages" class="col-span-1 mt-2"><Messages></Messages></div>
      </div>
    </div>
    <main>
      <div class="container max-w-5xl px-2 py-2 mx-auto mt-2 bg-gray-400">
        <div class="grid grid-cols-1">
          <div v-if="breadcrumbs" class="col-span-1 pt-2 pb-2"><Breadcrumb></Breadcrumb></div>
          <div class="col-span-1 pt-2 pb-2"><router-view></router-view></div>
        </div>
      </div>
    </main>
    <footer>
      <div class="container max-w-5xl px-2 py-2 mx-auto mt-2 bg-gray-400">
        <div class="grid grid-cols-1">
          <div class="col-span-1"><Footer></Footer></div>
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
a{
  color: #1f6fed;
}
</style>
