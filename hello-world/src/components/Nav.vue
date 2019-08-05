<template>
  <div id="nav">
    <!-- Navbar content -->
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
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
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  text-decoration: none;
}
li a {
  color: rgb(19, 20, 20);
  font-size: 20px;
}
.nav-wrapper {
  font-size: 25px;
  background-color: #00e676;
}
.brand-logo {
  position: relative;
  margin-left: 70px;
}
.right {
  margin-right: 50px;
}
</style>
