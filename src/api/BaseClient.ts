import axios from 'axios';

const BASE_URL = 'https://lapras.wo.tc/api';

export default axios.create({
  baseURL: BASE_URL,
});
