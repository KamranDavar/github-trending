import axios from 'axios'
import { toast } from 'react-toastify'

const githubTrendingClient = axios.create({
  baseURL: 'https://gh-trending-api.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
})

githubTrendingClient.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    toast.warn(err.message)
    return Promise.reject(err)
  }
)

export default githubTrendingClient
