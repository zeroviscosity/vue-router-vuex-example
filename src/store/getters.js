export default {
  query: (state, getters, rootState) => {
    const query = Object.assign({}, rootState.route.query);
    // Here we can provide default parameters
    query.address = query.address || '';
    query.category = query.category || null;
    query.maxRate = query.maxRate || null;
    return query;
  }
};
