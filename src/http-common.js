import axios from 'axios'

let HTTP = axios.create({
  baseURL: `http://127.0.0.1:8000/`,
  Authorization: undefined
})

if (window.localStorage.getItem('user_credentials')) {
  HTTP.defaults.headers.common['Authorization'] = window.localStorage.getItem('user_credentials')
}

export default HTTP
