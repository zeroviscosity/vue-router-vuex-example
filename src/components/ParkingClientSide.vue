<template>
  <SearchTable
    :current-query="currentQuery"
    :locations="locations"
    :update-query="updateQuery"
    :search="search"
    :clear="clear"
    ></SearchTable>
</template>

<script>
import { mapGetters } from 'vuex';
import SearchTable from './SearchTable';

export default {
  name: 'ParkingClientSide',
  components: {
    SearchTable
  },
  data: () => ({
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
