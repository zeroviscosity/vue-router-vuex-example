<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 offset-sm1 md8 offset-md2 lg6 offset-lg3>
        <v-btn
          block
          color="primary"
          :to="'/client-side'"
          >Client-side Processing</v-btn>
        <v-btn
          block
          color="primary"
          :to="'/server-side'"
          >Server-side Processing</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home'
};
</script>
