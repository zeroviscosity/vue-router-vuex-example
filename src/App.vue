<template>
  <v-app id="app">
    <v-toolbar dark color="primary white--text" app>
      <v-toolbar-title>Green P Parking Lots in Toronto</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          :to="'/home'"
          >Home</v-btn>
        <v-btn
          flat
          :to="'/client-side'"
          >Client-side</v-btn>
        <v-btn
          flat
          :to="'/server-side'"
          >Server-side</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>
