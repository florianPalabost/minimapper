import Vue from 'vue';
import Vuex from 'vuex';
import addresses from './modules/addresses';
import lignes from './modules/lignes';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    addresses,
    lignes,
  },
});
