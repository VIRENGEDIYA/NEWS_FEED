import { getGeneralNews, getBusinessNews, getEntertainmentNews, getHealthNews, getSportsNews, getScienceNews, getTechnologyNews } from '../actions/categoryAction'
import axios from 'axios'

export const fetchGeneralNews = (category,page,pageSize) => {
    return (dispatch) => {
         setTimeout(() => {
             axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&from=${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}&page=${page}&pageSize=${pageSize}&apiKey=df5469ac0e22426490db7aa4a40eace4`)
                 .then(response => {
                     switch(category) {
                         case "general":
                             dispatch(getGeneralNews(response.data.articles))
                             break;
                         case "business":
                             dispatch(getBusinessNews(response.data.articles))
                             break
                         case "entertainment":
                             dispatch(getEntertainmentNews(response.data.articles))
                             break
                         case "health":
                             dispatch(getHealthNews(response.data.articles))
                             break
                         case "sports":
                             dispatch(getSportsNews(response.data.articles))
                             break
                         case "science":
                             dispatch(getScienceNews(response.data.articles))
                             break
                         default:
                             dispatch(getTechnologyNews(response.data.articles))
                             break   
                     }
                 })
                 .catch(error => {
                     throw(error)
                  })
         }, 1500)
     };
 }
 