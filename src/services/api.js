import axios from 'axios';

/*
// Rodar com IPV4: json-server --watch -d 180 --host SEU IP db.json

/// No caso o meu em casa seria: json-server --watch -d 180 --host 192.168.0.109 db.json

// 192.168.0.109 // MEU IP AQUI EM CASA....
*/

const api = axios.create({
    baseURL: 'http://192.168.0.109:3000'
})

export default api;
