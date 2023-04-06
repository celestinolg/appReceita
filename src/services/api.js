import axios from 'axios';

/*
start json server: json-server --watch -d 180 --host 192.168.8.101 db.json
*/
const api = axios.create({
    baseURL: 'http://192.168.8.101:3000'
})

export default api;