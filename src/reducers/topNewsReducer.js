// import { INITIAL_STATE } from './index'

export const INITIAL_STATE = {
    refreshing : true
 }


export const TopHeading = (state = INITIAL_STATE, action) => {
    switch (action.type) { 
              
        case "API_GET_TOP_NEWS_BY_CATEGORY" :
            return {...state, category:categoryData,refreshing:false}
            
        case "API_GET_TOP_NEWS_BY_COUNTRY_WITH_CATEGORY" : 
            let countryData = [...state.topNews || [],...action.payload]
            return {...state, topNews:countryData,refreshing:false}
       
        case "API_GET_CLEAR_DATA" :
            return INITIAL_STATE
    
        default:
            return {...state}
    }
}


export default TopHeading