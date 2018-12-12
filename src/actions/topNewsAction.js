import axios from 'axios'
import types from '../constant'


export const getClearState =() => {
    return{
        type : types.API_GET_CLEAR_DATA
    }
}

export const getTopNewsByCountryWithCategory =(data) => {
    return{
        type : types.API_GET_TOP_NEWS_BY_COUNTRY_WITH_CATEGORY,
        payload : data
    }
}


export const getTopNewsByCategory = (data) => {
    return {
        type: types.API_GET_TOP_NEWS_BY_CATEGORY,
        payload: data
    }
}


export const fetchTopNewsByCategory = (category,page,pageSize) => {
    return (dispatch) => {
         axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&from=${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}&page=${page}&pageSize=${pageSize}&apiKey=5a98ae8d682f4866a7a9e2d5e8fe9027`)
            .then(response => {
                dispatch(getTopNewsByCategory({[category] : response.data.articles}))
            })
            .catch(error => {   
                throw(error)
            });
    }
}

export const fetchTopNewsByCountryWithCategory = (country, category, page, pageSize) =>  {
    return (dispatch) => {
        setTimeout(() => {
           return axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=5a98ae8d682f4866a7a9e2d5e8fe9027`)
                .then(response => {
                    dispatch(getTopNewsByCountryWithCategory(response.data.articles))
                })
                .catch(error => {
                    throw(error)
                })
        }, 1500)
    };
}
