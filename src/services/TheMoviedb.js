import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: 'https://api.themoviedb.org/3/',
        APIKEY: '9cce8ac649022e53376ee7864fe9a772',
        headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'
        }
    })
}