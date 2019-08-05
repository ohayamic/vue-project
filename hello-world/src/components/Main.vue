<template>
  <div id="app">
    <h1>{{message}}</h1>
    <ul>
      <li v-for="(product, index) in products" v-bind:key="index">
        <span>Name: {{product.name}}</span>
        <span>Age: {{product.Age}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "This is the Main message"
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

<style scoped>
#app {
  width: 80%;
  margin: 0 auto;
  padding: 40px;
  background-color: gray;
}
#app h1 {
  color: blue;
  font-family: sans-serif, serif;
}
#app li {
  margin-top: 20px;
  height: 100px;
  color: darkcyan;
  background-color: darkgray;
}
#app li span {
  display: inline-block;
  margin-right: 20px;
  padding: 40px;
}
</style>
