import types from '../constant'
import Axios from 'axios';

export const getAllNewsFeed = (data) =>{
    console.log("=========================== ====in action",data)
    return{ 
        type : types.API_SET_NEWS_FEED,
        payload : data
    }
}

export const loading = () =>{
    // console.log("@@@@@@@@@@@@@@@@@@@@@222  ") 
    return {
        type : types.API_GET_NEWS_FEED
    }
}


export const getSearchNews = (data) => {
    return {
        type : types.API_GET_SEARCH_NEWS,
        payload : data
    }
}
    
export const fetchAllNewsFeed = () =>{
    return (dispatch) => {   
        return Axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}&sortBy=publishedAt&apiKey=5a98ae8d682f4866a7a9e2d5e8fe9027`)
        // return Axios.get(`https://newsapi.org/v2/sources?apiKey=5a98ae8d682f4866a7a9e2d5e8fe9027`)
                .then( response => { 
                    console.log("====================",response.data)
                    dispatch(getAllNewsFeed(response.data))
                })
                .catch( error => {
                    console.log ("====================================+Hello")
                    console.warn("fetch error :",  error)
                    // throw(error)
                    return    <Text> Data NOt found</Text>
                    
                });
    }
}

export const fetchSearchNews = (country) =>{
    return (dispatch) => {
        return Axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=5a98ae8d682f4866a7a9e2d5e8fe9027`)
        .then(response => {
            dispatch(getSearchNews(response.data))
        })
        .catch(error =>{
            throw(error)
        })
    }
}
  
export const fetchSearchByCategory = (category) =>{
    return (dispatch) => {
        return Axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=5a98ae8d682f4866a7a9e2d5e8fe9027`)
        .then(response => {
            console.log("====================",response.data)
            dispatch(getSearchNews(response.data))
        })
        .catch(error =>{
            throw(error)
        })
    }
}