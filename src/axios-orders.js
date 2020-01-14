import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://burger-test-api-arina.firebaseio.com/'
});

export default axiosOrders;