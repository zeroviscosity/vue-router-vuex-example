<template>
  <SearchTable
    :current-query="currentQuery"
    :lots="lots"
    :update-query="updateLocalQuery"
    :search="search"
    :clear="clearQuery"
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
    currentQuery(val) {
      this.getLots(val);
    }
  },
  created() {
    this.getLots(this.currentQuery);
  },
  methods: {
    ...mapActions({
      getLots: 'serverSide/getLots'
    }),
    ...mapActions([
      'clearQuery',
      'updateQuery'
    ]),
    search() {
      this.updateQuery(this.query);
    },
    updateLocalQuery(key, val) {
      this.query[key] = val;
    }
  }
};
</script>
