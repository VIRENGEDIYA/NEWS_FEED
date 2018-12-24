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
