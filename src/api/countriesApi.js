import axios from 'axios'
import { getTopNewsByCountryWithCategory } from '../actions/topNewsAction'

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