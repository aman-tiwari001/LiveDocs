import axios from 'axios';
import { SERVER_URL } from '../constants';

const LoginUser = async (credentials) => {
  const res = await axios.post(`${SERVER_URL}/auth/login`, credentials);
  return res;
};

const SignUpUser = async (credentials) => {
  const res = await axios.post(`${SERVER_URL}/auth/signup`, credentials);
  return res;
};

export { LoginUser, SignUpUser };
