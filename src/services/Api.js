import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/photos',
        headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'
        }
    })
}