
export const INITIAL_STATE = {
    refreshing : true
 }


 export const sourcesNews = (state = INITIAL_STATE,action ) => {
     switch(action.type){
         
        case 'API_GET_SOURCE_DETAILS': 
            let sourcesData = [...state.sources || [],...action.payload]
            return {...state,sources:sourcesData,refreshing:false}

        default : 
            return {}
     }
 }

 export default sourcesNews