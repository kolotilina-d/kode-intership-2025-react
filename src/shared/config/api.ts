import axios from 'axios';

const api = axios.create({
  baseURL: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  response => response,
  error => {
    const errorMessage = error.response?.data?.message || error.message || 'Unknown error';
    console.error('Error:', errorMessage);
    return Promise.reject(new Error(errorMessage));
  }
)

export default api;