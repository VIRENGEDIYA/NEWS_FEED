import { INITIAL_STATE } from './index'

export const categoryNews = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'API_GET_GENERAL_CATEGORY':
// export const categoryNews = (state = INITIAL_STATE.category, action) => {
            return {...state,category:action.payload,refreshing:false}//action.payload
        
        default:
            return {...state}
    }
}

export default categoryNews