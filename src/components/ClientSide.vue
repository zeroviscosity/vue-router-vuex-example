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
import { mapGetters } from 'vuex';
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
      currentQuery: 'clientSide/query',
      lots: 'clientSide/lots'
    })
  },
  created() {
    this.$store.dispatch('clientSide/getLots');
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
