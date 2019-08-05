import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { name: "Michael", Age: 20 },
      { name: "James", Age: 26 },
      { name: "John", Age: 32 },
      { name: "Jude", Age: 30 }
    ]
  }
});
