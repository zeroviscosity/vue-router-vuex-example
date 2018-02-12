import router from '@/router';

export default {
  updateQuery: ({ rootState }, newQuery) => {
    const query = Object.assign({}, rootState.route.query, newQuery);
    router.push({ query });
  },
  clearQuery: () => {
    router.push({ query: {} });
  }
};
