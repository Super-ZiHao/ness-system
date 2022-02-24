import axios from 'axios'

const server = axios.create({
  timeout: 5000,
  baseURL: 'http://localhost:8000/',
})

server.interceptors.request.use((config) => {
  return config
})

server.interceptors.response.use((res) => {
  return res.data
})

export default server
