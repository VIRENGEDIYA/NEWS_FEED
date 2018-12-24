// import { INITIAL_STATE } from './index'

export const INITIAL_STATE = {
    refreshing : true
 }

export const categoryNews = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case 'API_GET_GENERAL_CATEGORY':
            let generalData = [...state.general || [],...action.payload ]
            return {...state,general:generalData,refreshing:false}
    
        case "API_GET_BUSINESS_CATEGORY":
            let businessData = [...state.business || [],...action.payload ]
            return {...state,business:businessData,refreshing:false}
       
        case "API_GET_ENTERTAINMENT_CATEGORY":
            let entertainmentData = [...state.entartainment || [],...action.payload ]
            return {...state,entertainment:entertainmentData,refreshing:false}
        
        case "API_GET_HEALTH_CATEGORY":
            let healthData = [...state.health || [],...action.payload ]
            return {...state,health:healthData,refreshing:false}
    
        case "API_GET_SCIENCE_CATEGORY":
            let scienceData = [...state.science || [],...action.payload ]
            return {...state,science:scienceData,refreshing:false}
    
        case "API_GET_SPORTS_CATEGORY":
            let sportsData = [...state.sports || [],...action.payload ]
            return {...state,sports:sportsData,refreshing:false}
    
        case "API_GET_TECHNOLOGY_CATEGORY":
            let technologyData = [...state.technology || [],...action.payload ]
            return {...state,technology:technologyData,refreshing:false}
    
        case "API_GET_CLEAR_DATA" :
            return INITIAL_STATE
    
        default:
            return {...state}
    }
}

export default categoryNews