import types from '../constant'

export const getAllNewsFeed = (data) =>{
    return{ 
        type : types.API_SET_NEWS_FEED,
        payload : data
    }
}

export const loading = () =>{
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
    
