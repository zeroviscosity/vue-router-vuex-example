<template>
  <SearchTable
    :current-query="currentQuery"
    :lots="lots"
    :update-query="updateQuery"
    :search="search"
    :clear="clear"
    ></SearchTable>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SearchTable from './SearchTable';

export default {
  name: 'ServerSide',
  components: {
    SearchTable
  },
  data: () => ({
    query: {}
  }),
  computed: {
    ...mapGetters({
      currentQuery: 'serverSide/query',
      lots: 'serverSide/lots'
    })
  },
  watch: {
    currentQuery(val) {
      this.getLots(val);
    }
  },
  created() {
    this.$store.dispatch('serverSide/getLots', this.currentQuery);
  },
  methods: {
    ...mapActions({
      getLots: 'serverSide/getLots'
    }),
    search() {
      const query = Object.assign({}, this.currentQuery, this.query);
      this.$router.push({ query });
    },
    clear() {
      this.query = {};
      this.$router.push({ query: {} });
    },
    updateQuery(key, val) {
      this.query[key] = val;
    }
  }
};
</script>
