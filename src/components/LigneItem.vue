<template>
  <v-layout>
    <v-list-tile-content>
      <v-list-tile-title>
        {{line.code}} - {{line.name}}
      </v-list-tile-title>
      <v-list-tile-sub-title >{{line.id}}</v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-btn fab flat name="download" @click="getHoraireLine(line.id)">
        <v-icon color="grey lighten-1" large>cloud_download</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-layout>
</template>

<script>
export default {
  props: ['line'],
  name: 'LigneItem',
  methods: {
    getHoraireLine(id) {
      let url = 'https://api.navitia.io/v1/coverage/fr-se/lines/';
      url = url.concat(id).concat('/route_schedules?from_datetime=20180722T120000&items_per_schedule=25');
      const myRequest = new Request(url);
      const myHeaders = new Headers({
        Authorization: 'cc5dfe58-f42f-40dd-a3b0-217b9f82cdd6',
      });
      const myInit = {
        method: 'GET',
        headers: myHeaders,
      };
      fetch(myRequest, myInit).then(reponse => reponse.json()).then((data) => {
        this.$store.dispatch('stops', [data.route_schedules[0].table.rows, id]);
        // enregistre dans le localStorage l'id de la ligne en key et les stops en valeurs
        localStorage.setItem(id, JSON.stringify(data.route_schedules[0].table.rows));
      });
    },
  },
};
</script>
