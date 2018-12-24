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