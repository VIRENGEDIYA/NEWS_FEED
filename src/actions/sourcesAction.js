import axios from 'axios'
import types from '../constant'


export const getAllSources = (data) => {
    return {
        type : types.API_GET_SOURCE_DETAILS,
        payload : data 
    }
}


export const fetchAllSources = () => {
    return (dispatch) => {
        axios.get(`https://newsapi.org/v2/sources?apiKey=5a98ae8d682f4866a7a9e2d5e8fe9027`)
           .then(response => {
                console.log("+++++++++++++++++++++++",response.data.sources)
               dispatch(getAllSources(response.data.sources))
           })
           .catch(error => {   
               throw(error)
           });
   }
}