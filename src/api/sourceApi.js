import axios from 'axios'
import { getAllSources } from '../actions/sourcesAction'

export const fetchAllSources = () => {
    return (dispatch) => {
        axios.get(`https://newsapi.org/v2/sources?apiKey=df5469ac0e22426490db7aa4a40eace4`)
           .then(response => {
               dispatch(getAllSources(response.data.sources))
           })
           .catch(error => {   
               throw(error)
           });
   }
}