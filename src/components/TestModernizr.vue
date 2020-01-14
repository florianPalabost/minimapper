<template>
  <v-flex text-xs-center>
    <h1>Modernizr</h1>
    <ul id="modernizr">
      <li id="batteryapi">Battery API : {{batteryapi}} </li>
      <li id="canvas">Canvas : {{canvas}}</li>
      <li id="devicemotion">devicemotion : {{devicemotion}}</li>
      <li id="deviceorientation">deviceorientation : {{deviceorientation}}</li>
      <li id="geolocation">Geolocation API : {{geolocation}}</li>
      <li id="localstorage">Local Storage : {{localstorage}}</li>
      <li id="pointerevents">DOM Pointer Events API : {{pointerevents}}</li>
      <li id="vibrate">Vibration API : {{vibrate}}</li>
    </ul>
  </v-flex>
  </template>

<script>
import modernizr from 'modernizr';

export default {
  name: 'TestModernizr',
  data() {
    return {
      // par defaut apis a faux
      batteryapi: 'non',
      canvas: 'non',
      devicemotion: 'non',
      deviceorientation: 'non',
      geolocation: 'non',
      localstorage: 'non',
      pointerevents: 'non',
      vibrate: 'non',
    };
  },
  created() {
    // check compatibility browser
    this.yesOrNot();
  },
  methods: {
    yesOrNot() {
      /* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
      if (modernizr.batteryapi) {
        this.batteryapi = 'oui';
      }
      if (modernizr.canvas) {
        this.canvas = 'oui';
      }
      if (modernizr.devicemotion) {
        this.devicemotion = 'oui';
      }
      if (modernizr.deviceorientation) {
        this.deviceorientation = 'oui';
      }
      if (modernizr.geolocation) {
        const self = this;
        // need watchposition ?
        navigator.geolocation.getCurrentPosition(function success(position) {
          self.geolocation = '';
          self.geolocation = self.geolocation.concat(position.coords.latitude).concat(' ; ').concat(position.coords.longitude);
        });
      }
      if (modernizr.localstorage) {
        this.localstorage = 'oui';
      }
      if (modernizr.pointerevents) {
        this.pointerevents = 'oui';
      }
      if (modernizr.vibrate) {
        this.vibrate = 'oui';
      } else {
        this.vibrate = 'non';
      }
    },
  },
};
</script>
<style scoped>
#modernizr{
  list-style-type: none;
}
</style>
