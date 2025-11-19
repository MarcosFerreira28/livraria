import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Interceptor simples para incluir Authorization quando existir token
api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('accessToken')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
  } catch (err) {
  }
  return config
})

export default api
