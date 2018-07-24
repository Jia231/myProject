import axios from 'axios';

const url = "localhost:8080"

export default {
    greet :{
        sayHello: ()=>axios.get(url).then(res=>res.data)
    }
}