<template>
  <v-layout row class="location_text_field">
    <v-select
      :label= label
      autocomplete
      v-bind:loading="loading"
      v-bind:items="items"
        item-text="name"
        item-value="id"
      v-bind:search-input.sync="search"
      v-model="select">
    </v-select>
    <template slot="selection" slot-scope="data">
        {{data.item.name }}
      </template>
      <template slot="item" slot-scope="data">
        {{data.item.name }}
      </template>
      <v-btn icon name="findMe" @click="findMe(this)"
        v-bind:search-input.sync="search"><v-icon class="material-icons">
        location_on</v-icon>
      </v-btn>
  </v-layout>
</template>

<script>
/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */
export default {
  name: 'LocationTextField',
  props: ['label', 'storeProperty'],
  data() {
    return {
      loading: false,
      items: [],
      search: null,
    };
  },
  watch: {
    search(val) {
      // val est la valeur du champ texte -> val bien recupérée
      val && this.querySelections(val);
    },
  },
  methods: {
    querySelections(val) {
      const self = this;
      this.loading = true;
      const url = 'https://api.navitia.io/v1/coverage/fr-se/places?q=';
      const myRequest = new Request(url.concat(val));
      // token a ne pas mettre dans le code normalement
      const myHeaders = new Headers({
        Authorization: 'e449adfe-6f8c-4998-b235-d32ae200b037',
      });
      const myInit = {
        method: 'GET',
        headers: myHeaders,
      };
      fetch(myRequest, myInit).then(reponse => reponse.json()).then((data) => {
        this.loading = false;
        self.items = data.places;
      });
    },
    findMe() {
      const self = this;
      function success(pos) {
        const crd = pos.coords;
        const mypos = `${crd.longitude};${crd.latitude}`;
        self.$store.dispatch(self.storeProperty, mypos);
        self.search = mypos;
        self.loading = false;
      }
      function error() {
        self.search = 'erreur';
        // console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      navigator.geolocation.getCurrentPosition(success, error);
    },
  },
  computed: {
    select: {
      get() {
        return this.$store.getters[this.storeProperty];
      },
      set(v) {
        this.$store.dispatch(this.storeProperty, v);
      },
    },
  },
};
</script>
<style>
.input-group--select .input-group--select__autocomplete{
  height: auto;
}
</style>
