import axios from 'axios'

// https://api.hgbrasil.com/weather?key=c396b1c3&lat=-23.682&lon=-46.875

export const key = 'c396b1c3'

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
})

export default api