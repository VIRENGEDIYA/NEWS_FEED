import { INITIAL_STATE } from './index'



export const TopHeading = (state = INITIAL_STATE.topNews, action) => {
    switch (action.type) {
        case 'API_GET_COUNTRY':
            return {}

        case 'API_GET_TOP_NEWS_BY_COUNTRY':
            return {...state,topNews:action.payload,refreshing:false}
        
        case "API_GET_TOP_NEWS_BY_CATEGORY" :
            console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",action.payload)
            return {...state, topNews :action.payload,refreshing:false}
        
        case " API_GET_NEWS_FEED" : 
            return state
        
        case "API_GET_SEARCH_NEWS" :
            return {...state,news:action.payload,refreshing:false}
    
        default:
            return {...state}
    }
}


export default TopHeading