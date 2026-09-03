import axios from 'axios';

export const baseApi = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
})
