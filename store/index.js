import Vuex from "vuex";
import categories from "./modules/categories";
import products from "./modules/products";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
      categories,
      products,
    },
  });
}

export default createStore;