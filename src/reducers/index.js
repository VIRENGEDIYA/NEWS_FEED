import { combineReducers } from 'redux'; 
import TopHeadline from './topNewsReducer'
import categoryNews from './categoryReducer'

export default reducers  =  combineReducers ({
     TopHeadline,
     categoryNews
}); 