import axios from 'axios'

 const api =  axios.create({
     baseURL: 'https://labeddit.herokuapp.com'
 })


 export default api