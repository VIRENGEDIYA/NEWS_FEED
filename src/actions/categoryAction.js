import axios from 'axios'
import types from '../constant'

export const getGeneralNews = (data) => {
    return {
        type: types.API_GET_GENERAL_CATEGORY,
        payload: data
    }
}

export const getBusinessNews = (data) => {
    return {
        type: types.API_GET_BUSINESS_CATEGORY,
        payload: data
    }
}

export const getEntertainmentNews = (data) => {
    return {
        type: types.API_GET_ENTERTAINMENT_CATEGORY,
        payload: data
    }
}

export const getHealthNews = (data) => {
    return {
        type: types.API_GET_HEALTH_CATEGORY,
        payload: data
    }
}

export const getSportsNews = (data) => {
    return {
        type: types.API_GET_SPORTS_CATEGORY,
        payload: data
    }
}

export const getScienceNews = (data) => {
    return {
        type: types.API_GET_SCIENCE_CATEGORY,
        payload: data
    }
}

export const getTechnologyNews = (data) => {
    return {
        type: types.API_GET_TECHNOLOGY_CATEGORY,
        payload: data
    }
}

export const fetchGeneralNews = (category,page,pageSize) => {
   return (dispatch) => {
        setTimeout(() => {
            axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&from=${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}&page=${page}&pageSize=${pageSize}&apiKey=5a98ae8d682f4866a7a9e2d5e8fe9027`)
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

                    // dispatch(getGeneralNews({[category] :  response.data.articles}))
                })
                .catch(error => {
                    throw(error)
                 })
        }, 1500)
    };
}

