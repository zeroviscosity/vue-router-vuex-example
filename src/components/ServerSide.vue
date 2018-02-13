<template>
  <SearchTable
    :current-query="currentQuery"
    :lots="lots"
    :update-query="updateLocalQuery"
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
      currentQuery: 'query',
      lots: 'serverSide/lots'
    })
  },
  watch: {
    currentQuery() {
      this.getLots();
    }
  },
  created() {
    this.getLots();
  },
  methods: {
    ...mapActions({
      getLots: 'serverSide/getLots'
    }),
    ...mapActions([
      'clearQuery',
      'updateQuery'
    ]),
    clear() {
      this.query = {};
      this.clearQuery();
    },
    search() {
      this.updateQuery(this.query);
    },
    updateLocalQuery(key, val) {
      this.query[key] = val;
    }
  }
};
</script>
