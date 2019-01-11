import axios from 'axios'
import { getTopNewsByCountryWithCategory } from '../actions/topNewsAction'

export const fetchTopNewsByCountryWithCategory = (country, category, page, pageSize) =>  {
    return (dispatch) => {
        setTimeout(() => {
           return axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=df5469ac0e22426490db7aa4a40eace4`)
                .then(response => {
                    dispatch(getTopNewsByCountryWithCategory(response.data.articles))
                })
                .catch(error => {
                    throw(error)
                })
        }, 1500)
    };
}