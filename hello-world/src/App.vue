<template>
  <div>
    <navComponent />
    <mainComponent />
    <footComponent />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Foot from "./components/Foot.vue";
import Main from "./components/Main.vue";

export default {
  components: {
    navComponent: Nav,
    footComponent: Foot,
    mainComponent: Main
  },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
.msg {
  height: 500px;
}
</style>
