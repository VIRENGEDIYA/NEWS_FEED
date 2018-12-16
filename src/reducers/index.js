import { combineReducers } from 'redux'; 
import TopHeadline from './topNewsReducer'
import categoryNews from './categoryReducer'
import sourcesNews from './sourcesReducer'

export default reducers  =  combineReducers ({
     TopHeadline,
     categoryNews,
     sourcesNews
}); 