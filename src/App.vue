<template>
  <v-app id="app">
    <v-toolbar dark color="primary white--text" app>
      <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
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
