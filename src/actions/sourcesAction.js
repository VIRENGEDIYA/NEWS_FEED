import types from '../constant'


export const getAllSources = (data) => {
    return {
        type : types.API_GET_SOURCE_DETAILS,
        payload : data 
    }
}

