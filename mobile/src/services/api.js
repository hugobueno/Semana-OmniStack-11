import axios from 'axios'

const api = axios.create({
    baseURL:'http://192.168.2.104:3001'
})

export default api