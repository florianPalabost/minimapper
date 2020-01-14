<template>
  <v-flex xs12 sm6 offset-sm3 v-if="lines.length > 0">
    <div class="text-xs-center">
      <v-pagination :pagination.sync="pagination" v-model="lines" :length="6">
      </v-pagination>
    </div>
      <v-card>
        <v-toolbar color="blue" dark>
          <v-toolbar-title>Lignes</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list two-line>
          <v-list-tile v-for="(line,index) in lines"
            :key="index">
            <ligne-item v-bind:line="line" ></ligne-item>
          </v-list-tile>
        </v-list>
      </v-card>
  </v-flex>
</template>

<script type="text/javascript">
import LigneItem from './LigneItem';

export default {
  name: 'LignesList',
  components: {
    LigneItem,
  },
  data() {
    return {
      pagination: {},
    };
  },
  computed: {
    lines: {
      get() {
        return this.$store.getters.lines;
      },
      set(v) {
        const self = this;
        self.research(v - 1);
      },
    },
    localLines() {
      return this.$store.getters.localLines;
    },
  },
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
    research(val) {
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
};
</script>
