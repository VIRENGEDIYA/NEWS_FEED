import Api_Call from '../api/NewsFeed'
import { INITIAL_STATE } from './index'

// const INITIAL_STATE = {
//    news :{},
//    refreshing : false
    
// }

export const newsFeed = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'API_SET_NEWS_FEED':
            // news =  action.payload.articles
            return {...state,news :action.payload,refreshing:false}//action.payload
        case " API_GET_NEWS_FEED" :
            return state
        case "API_GET_SEARCH_NEWS" :
            return {...state,news:action.payload,refreshing:false}
        default:
            return {...state}
    }
}

export default newsFeed