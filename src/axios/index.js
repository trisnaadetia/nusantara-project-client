import axios from 'axios'

const baseUrl = axios.create({
  baseURL: 'https://nusantara-project.herokuapp.com'
})

export default baseUrl