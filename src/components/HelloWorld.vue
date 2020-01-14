<template>
  <v-flex text-xs-center sm6>
    <location-text-field label="Départ" storeProperty="departure"></location-text-field>
    <location-text-field label="Arrivée" storeProperty="arrival"></location-text-field>
    <v-btn
      :loading="loading"
      color="info"
      name="research"
      @click="research">
      Rechercher
    </v-btn>
    <journey-list></journey-list>
  </v-flex>
</template>

<script>
import LocationTextField from './LocationTextField';
import JourneyList from './JourneyList';

export default {
  name: 'HelloWorld',
  components: {
    LocationTextField,
    JourneyList,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    research() {
      this.loading = true;
      const depart = this.$store.getters.departure;
      const arrive = this.$store.getters.arrival;

      let url = 'https://api.navitia.io/v1/coverage/fr-se/journeys?from=';
      url = url.concat(depart).concat('&to=').concat(arrive);
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
        this.loading = false;
        this.$store.dispatch('journeys', data.journeys);
      });
    },
  },
};
</script>
