/* eslint linebreak-style: ["error", "windows"] */
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// we put default lines here
const state = {
  lines: [],
  start_page: null,
  localLines: [],
};

// get the data from the store
const getters = {
  lines: state => state.lines,
  start_page: state => state.start_page,
  localLines: state => state.localLines,
};

// only place where the store can be updated (in MAJ)
const mutations = {
  START_PAGE: (state, val) => {
    state.start_page = val;
  },
  LINES: (state, val) => {
    state.lines = val;
    // Array.prototype.push.apply(state.lines, val);
    // state.lines = state.lines.concat(val);
  },
  STOPS: (state, val) => {
    const index = state.lines.findIndex(fline => fline.id === val[1]);
    // state.lines.set(index, 'stops', val[0]);
    state.lines[index] = Object.assign({}, state.lines[index], {
      stops: val[0],
    });
  },
  LOAD_LINES: (state) => {
    state.localLines = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      if (localStorage.key(i).includes('line:DGL')) {
        state.localLines.push(localStorage.key(i));
      }
    }
  },
};

// calls that will commit changes to store
const actions = {
  start_page: ({ commit }, val) => {
    commit('START_PAGE', val);
  },
  lines: ({ commit }, val) => {
    commit('LINES', val);
  },
  stops: ({ commit }, val) => {
    commit('STOPS', val);
  },
  loadLines: ({ commit }, val) => {
    commit('LOAD_LINES', val);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
