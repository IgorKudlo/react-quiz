import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-54682.firebaseio.com/'
})