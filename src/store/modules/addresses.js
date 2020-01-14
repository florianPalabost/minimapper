/* eslint linebreak-style: ["error", "windows"] */
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// we put default addressess here
const state = {
  counter: 4,
  addresses: [
    {
      name: 'Maison',
      address: '34 rue Bolivar, 69005, Lyon',
      favorite: true,
    }, {
      name: 'Travail',
      address: '43, bd du 11 novembre 1918, 69622 Villeurbanne cedex',
      favorite: true,
    }, {
      name: 'Nautibus',
      address: '43, bd du 11 novembre 1918, 69622 Villeurbanne cedex',
      favorite: false,
    }, {
      name: 'AML',
      address: '43, bd du 11 novembre 1918, 69622 Villeurbanne cedex',
      favorite: false,
    },
  ],
  departure: null,
  arrival: null,
  journeys: [],
};

// get the data from the store
const getters = {
  addresses: state => state.addresses,
  counter: state => state.counter,
  departure: state => state.departure,
  arrival: state => state.arrival,
  journeys: state => state.journeys,
};

// only place where the store can be updated (in MAJ)
const mutations = {
  ADD_ADDRESS: (state, address) => {
    const newAddress = {
      name: address.name,
      address: address.address,
      favorite: true,
    };
    state.addresses.push(newAddress);
    state.counter += 1;
  },
  DEL_ADDRESS: (state, address) => {
    const index = state.addresses.findIndex(faddress => faddress.name === address.name);
    state.addresses.splice(index, 1);
    state.counter -= 1;
  },
  INCREMENT: (state) => {
    state.counter += 1;
  },
  DEPARTURE: (state, val) => {
    state.departure = val;
  },
  ARRIVAL: (state, val) => {
    state.arrival = val;
  },
  JOURNEYS: (state, val) => {
    state.journeys = val;
  },
};

// calls that will commit changes to store
const actions = {
  addAddress: ({ commit }, address) => {
    commit('ADD_ADDRESS', address);
  },
  delAddress: ({ commit }, address) => {
    commit('DEL_ADDRESS', address);
  },
  departure: ({ commit }, val) => {
    commit('DEPARTURE', val);
  },
  arrival: ({ commit }, val) => {
    commit('ARRIVAL', val);
  },
  journeys: ({ commit }, val) => {
    commit('JOURNEYS', val);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
