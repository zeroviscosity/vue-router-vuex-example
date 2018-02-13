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
  name: 'ClientSide',
  components: {
    SearchTable
  },
  data: () => ({
    query: {}
  }),
  computed: {
    ...mapGetters({
      currentQuery: 'query',
      lots: 'clientSide/lots'
    })
  },
  created() {
    this.getLots();
  },
  methods: {
    ...mapActions({
      getLots: 'clientSide/getLots'
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
