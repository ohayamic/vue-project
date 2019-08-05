<template>
  <div>
    <!-- Navbar content -->
    <nav id="nav">
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {},
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  height: 300px;
  align-content: flex-end;
}
li a {
  color: rgb(8, 143, 20);
  font-size: 20px;
}
.nav-wrapper {
  font-size: 25px;
  background-color: #080808;
}

.right {
  margin-right: 50px;
}
</style>


