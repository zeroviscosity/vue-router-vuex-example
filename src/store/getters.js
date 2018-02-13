export default {
  query: (state, getters, rootState) => {
    const query = Object.assign({}, rootState.route.query);

    // Here we can provide default parameters
    query.address = query.address || '';
    query.maxRate = query.maxRate || null;

    // In some cases the defaults may depend on the view
    switch (rootState.route.name) {
      case 'ClientSide':
        query.category = query.category !== undefined ?
          query.category : 'Surface';
        break;
      case 'ServerSide':
        query.category = query.category !== undefined ?
          query.category : 'Garage';
        break;
      default:
        query.category = query.category || null;
    }

    return query;
  }
};
