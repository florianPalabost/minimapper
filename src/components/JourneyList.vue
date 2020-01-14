<template>
    <v-flex xs12 id="journeyList" v-if="journeys.length > 0">
      <v-card>
        <v-toolbar color="blue" dark>
          <v-toolbar-title>Itinéraires</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list>
          <v-list-group
            v-for="(item, index) in journeys"
            :key="index"
            no-action >
            <v-list-tile slot="activator">
              <v-list-tile-content >
                <v-list-tile-sub-title>N°{{ index+1}}</v-list-tile-sub-title>
                 </v-list-tile-content>
                 <v-list-tile-content>
                  <v-list-tile-sub-title>
                    Départ : {{ item.departure_date_time }}
                  </v-list-tile-sub-title>
                 <v-list-tile-sub-title>
                   Arrivée : {{ item.arrival_date_time }}
                  </v-list-tile-sub-title>
                 </v-list-tile-content>
                 <v-list-tile-content>
                <v-list-tile-title>
                  <v-icon>
                    timelapse
                  </v-icon> {{Math.round(item.duration/60,3)}}min
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(subItem, ind) in item.sections" :key="ind">
              <v-list-tile-content>
                <v-list-tile-title  v-if="subItem.type === 'street_network'">
                  <v-icon class="material-icons">directions_walk</v-icon>
                </v-list-tile-title>
                <v-list-tile-title  v-else-if="subItem.type === 'public_transport'">
                  <v-icon class="material-icons">directions_bus</v-icon>
                </v-list-tile-title>
                <v-list-tile-title
                  v-else-if="subItem.type === 'transfer' && subItem.transfer_type === 'walking'">
                  <v-icon class="material-icons">directions_walk</v-icon>
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-content v-if="subItem.from !== undefined">
                <v-list-tile-title>{{ subItem.from.name }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-content v-if="subItem.to !== undefined">
                <v-list-tile-title>
                   -> {{subItem.to.name}}
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-content v-if="subItem.type ==='waiting'">
                <v-list-tile-sub-title>
                  Attendre {{Math.round(subItem.duration/60,3)}}min
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-content v-else>
                <v-list-tile-sub-title>
                  {{Math.round(subItem.duration/60,3)}}min
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
</template>

<script>
import moment from 'moment';

export default {
  name: 'JourneyList',
  computed: {
    journeys() {
      const listJourney = this.$store.getters.journeys;
      let i = 0;
      // parcours des itineraires pour modifier l'affichage des dates pour pouvoir les lire
      for (i; i < listJourney.length; i += 1) {
        // formatage date avec moment
        listJourney[i].departure_date_time = moment(listJourney[i].departure_date_time).format('DD/MM/YYYY à HH:mm');
        listJourney[i].arrival_date_time = moment(listJourney[i].arrival_date_time).format('DD/MM/YYYY à HH:mm');
      }
      return listJourney;
    },
  },
};
</script>

<style scoped>
.list__tile__content{
 /* display: contents; */
}
.list__tile__sub-title{
  text-align: center;
}
</style>
