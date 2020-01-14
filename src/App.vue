<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer fixed v-model="drawer" app class="menu">
        <v-toolbar flat>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title">
                Application
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list dense>
          <router-link to="/" class="list__tile list__tile--link">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                Accueil
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
          <router-link to="/aroundme" class="list__tile list__tile--link">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>room</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                Autour de moi
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
          <router-link to="/myaddresses" class="list__tile list__tile--link">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>book</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                 Mes Adresses
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
          <router-link to="/lignes" class="list__tile list__tile--link">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>subway</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                 Lignes Métro Bus TCL
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
          <router-link to="/video" class="list__tile list__tile--link">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>360</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                Camera
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
          <router-link to="/modernizr" class="list__tile list__tile--link">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>video_label</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                Test Modernizr
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="blue" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>MiniMapper</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
               <router-view/>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer color="blue" app>
        <span class="white--text">&copy; 2018 Florian PALABOST</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  // help animation slide left menu
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
  name: 'App',
};
</script>

<style>
.menu{
  z-index: 999999;
}
</style>
