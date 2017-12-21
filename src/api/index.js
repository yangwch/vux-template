import axios from 'axios';

export default {
  /* 登录 */
  login: data => axios.post('/api/login', data);
}