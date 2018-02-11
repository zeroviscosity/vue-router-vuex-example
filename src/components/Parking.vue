<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs3>
        <v-text-field
          label="Address"
          :value="currentQuery.address"
          @blur="updateQuery('address', $event.target.value)"
          ></v-text-field>
        <v-select
          :items="categories"
          :value="currentQuery.category"
          label="Category"
          single-line
          bottom
          @change="updateQuery('category', $event)"
          ></v-select>
        <v-text-field
          label="Max Rate"
          type="number"
          step="0.25"
          min="0"
          max="3"
          :value="currentQuery.maxRate"
          @blur="updateQuery('maxRate', $event.target.value)"
          ></v-text-field>
          <v-btn
            @click="search"
            >search</v-btn>
          <v-btn
            @click="clear"
            >clear</v-btn>
      </v-flex>
      <v-flex xs9>
        <v-data-table
            :headers="headers"
            :items="locations"
            :rows-per-page-items="rowsPerPage"
            class="elevation-1"
            >
            <template slot="items" slot-scope="props">
              <td>
                <a :href="getMapUrl(props.item)" target="_blank">
                  {{ props.item.address }}
                </a>
              </td>
              <td>{{ props.item.carpark_type_str }}</td>
              <td class="text-xs-right">{{ props.item.rate_half_hour }}</td>
            </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Parking',
  data: () => ({
    categories: ['Garage', 'Surface'],
    headers: [
      {
        text: 'Address',
        value: 'address',
        align: 'left'
      },
      {
        text: 'Category',
        value: 'carpark_type_str',
        align: 'left'
      },
      {
        text: 'Rate per Half Hour',
        value: 'rate_half_hour'
      }
    ],
    rowsPerPage: [10, 20, 30, { text: 'All', value: -1 }],
    query: {}
  }),
  computed: {
    ...mapGetters({
      currentQuery: 'parking/query',
      locations: 'parking/locations'
    })
  },
  created() {
    this.$store.dispatch('parking/getData');
  },
  methods: {
    getMapUrl(loc) {
      return `https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`;
    },
    search() {
      const query = Object.assign({}, this.currentQuery, this.query);
      this.$router.push({ query });
    },
    clear() {
      this.query = {};
      this.$router.push({ query: this.query });
    },
    updateQuery(key, val) {
      this.query[key] = val;
    }
  }
};
</script>
