import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pizza-builder-f6b84.firebaseio.com/'
});

export default instance;