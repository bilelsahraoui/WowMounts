import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {API_USERNAME, API_PASSWORD} from '@env';

axios
  .post(
    'https://oauth.battle.net/token?grant_type=client_credentials',
    {},
    {
      auth: {
        // username: `${API_USERNAME}`,
        // password: `${API_PASSWORD}`,
        username: '224c1b9847cc4423af306b30406934f0',
        password: 'RvpVZ7tS45IhuWwWQBo8uEG3eTdoZ7pS',
      },
    },
  )
  .then(res => AsyncStorage.setItem('apiToken', res.data.access_token))
  .catch(err => console.log(err));

const axiosClient = axios.create();

AsyncStorage.getItem('apiToken').then(token => {
  axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  return axiosClient;
});

axiosClient.defaults.timeout = 10000;

export default axiosClient;
