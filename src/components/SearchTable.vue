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
          min="0.75"
          max="3"
          :value="currentQuery.maxRate"
          @blur="updateQuery('maxRate', $event.target.value)"
          ></v-text-field>
          <v-btn
            @click="search"
            >search</v-btn>
          <v-btn
            @click="reset"
            >reset</v-btn>
      </v-flex>
      <v-flex xs9>
        <v-data-table
            :headers="headers"
            :items="lots"
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
export default {
  name: 'SearchTable',
  props: {
    currentQuery: {
      type: Object,
      default: () => {}
    },
    lots: {
      type: Array,
      default: () => []
    },
    updateQuery: {
      type: Function,
      default: () => () => {}
    },
    search: {
      type: Function,
      default: () => () => {}
    },
    reset: {
      type: Function,
      default: () => () => {}
    }
  },
  data: () => ({
    categories: [
      {
        text: 'All Categories',
        value: 'all'
      },
      {
        text: 'Garage',
        value: 'garage'
      },
      {
        text: 'Surface',
        value: 'surface'
      }
    ],
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
    rowsPerPage: [10, 20, 30, { text: 'All', value: -1 }]
  }),
  methods: {
    getMapUrl(loc) {
      return `https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`;
    }
  }
};
</script>
