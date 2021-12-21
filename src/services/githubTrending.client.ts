import axios from 'axios'

const githubTrendingClient = axios.create({
  baseURL: 'https://gh-trending-api.herokuapp.com',
  headers: {
    accept: 'application/json',
  },
})

githubTrendingClient.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default githubTrendingClient
