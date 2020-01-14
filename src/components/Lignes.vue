<template>
  <v-layout row>
    <lignes-list></lignes-list>
  </v-layout>
</template>

<script>
import LignesList from './LignesList';

export default {
  name: 'Lignes',
  components: {
    LignesList,
  },
  methods: {
    research(val) {
      // je sais pas ce que vous voulez faire du start page : si on doit faire un champs texte pour
      // demander le start_page ou tout simplement paginer le resultat.
      // au final je l'ai juste mis dans l'url de la requete et on peut le changer
      // directement dans celle-ci (0 <= start_page <= 6)
      let url = 'https://api.navitia.io/v1/coverage/fr-se/networks/network:tcl/lines?start_page=';
      url = url.concat(val);
      const myRequest = new Request(url);
      // token a ne pas mettre dans le code normalement
      const myHeaders = new Headers({
        Authorization: 'cc5dfe58-f42f-40dd-a3b0-217b9f82cdd6',
      });
      const myInit = {
        method: 'GET',
        headers: myHeaders,
      };
      fetch(myRequest, myInit).then(reponse => reponse.json()).then((data) => {
        this.$store.dispatch('lines', data.lines);
      });
    },
  },
  beforeMount() {
    this.research(0);
  },
};
</script>
