import axios from 'axios';

// eslint-disable-next-line import/no-cycle
// import store from '~/store';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: 'http://192.168.1.81:3333',
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@pizzaria:token');
  // store.getState().auth;
  // console.tron.log(token);
  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
    // console.tron.log(headers.Authorization);
  }

  return { ...config, headers };
});
export default api;
