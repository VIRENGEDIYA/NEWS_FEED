import axios from 'axios'
import types from '../constant'

export const getTopNewsByCountry = (data) => {
    console.log("============= in  getTopNewsByCountry   ")
    return {
        type: types.API_GET_TOP_NEWS_BY_COUNTRY,
        payload: data
    }
}

export const getTodayDate =( data) => {
    return{
        type : types.API_GET_GENERAL_CATEGORY,
        payload : data
    }
}



export const getTopNewsByCategory = (data) => {
    return {
        type: types.API_GET_TOP_NEWS_BY_CATEGORY,
        payload: data
    }
}

export const fetchTopNewsByCountry = (country, category, pageSize) => {
    // console.log("============= in fetchTopNewsByCountry    page :", page)
    return (dispatch) => {
        setTimeout(() => {
            axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=5a98ae8d682f4866a7a9e2d5e8fe9027`)
                .then(response => {

                    // console.log("====================",{[category] : response.data.articles})
                    dispatch(getTopNewsByCountry(response.data.articles))
                })
                .catch(error => {
                    console.log("====================================+Hello")
                    console.warn("fetch error :", error)
                    // throw(error)
                    return <Text> Data NOt found</Text>

                })
        }, 1500)
    };

}


export const fetchTodayNews = (category,pageSize) => {
    console.log("In fetchTodayNews category" ,category)

    return (dispatch) => {
        setTimeout(() => {
            axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&from=${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}&pageSize=${pageSize}&apiKey=5a98ae8d682f4866a7a9e2d5e8fe9027`)
                .then(response => {

                    console.log("==============snjvnsfjvs======",{[category] : response.data.articles})
                    // let [category] = {...response.data.articles}
                   
                    dispatch(getTodayDate({[category] :  response.data.articles}))
                })
                .catch(error => {
                    console.log("====================================+Hello")
                    console.warn("fetch error :", error)
                    // throw(error)
                    return <Text> Data NOt found</Text>

                })
        }, 1500)
    };
}


export const fetchTopNewsByCategory = (category,pageSize) => {
    // console.log("===========",country,"=============",category)
    return (dispatch) => {
        return axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&from=${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}&pageSize=${pageSize}&apiKey=5a98ae8d682f4866a7a9e2d5e8fe9027`)
            .then(response => {
                // console.log("====================",{[category] : response.data.articles})
                dispatch(getTopNewsByCategory(response.data.articles))
            })
            .catch(error => {   
                console.log("====================================+Hello")
                console.warn("fetch error :", error)
                // throw(error)
                return <Text> Data NOt found</Text>

            });
    }
}