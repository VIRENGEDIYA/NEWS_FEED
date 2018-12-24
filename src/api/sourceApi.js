import axios from 'axios'
import { getAllSources } from '../actions/sourcesAction'

export const fetchAllSources = () => {
    return (dispatch) => {
        axios.get(`https://newsapi.org/v2/sources?apiKey=5a98ae8d682f4866a7a9e2d5e8fe9027`)
           .then(response => {
               dispatch(getAllSources(response.data.sources))
           })
           .catch(error => {   
               throw(error)
           });
   }
}