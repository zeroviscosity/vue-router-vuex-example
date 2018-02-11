import axios from 'axios';

export default {
  getLots() {
    return axios.get('/static/parking.json');
  }
};
