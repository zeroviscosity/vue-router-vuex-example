import axios from 'axios';
import filterLots from '@/util/filter-lots';

export default {
  // Mock server-side processing by doing the filtering here rather than in the
  // store.
  getLots(query) {
    return axios.get('/static/parking.json')
      .then(resp => filterLots(resp.data.carparks, query));
  }
};
