import { combineReducers } from 'redux'; 
import newsFeed  from './newsFeed';
import TopHeadline from './TopHeadline'
import categoryNews from './categoryNews'


export const INITIAL_STATE = {
     news :{},
     topNews : {},
     category : {},
     sources :{},
     refreshing : true
  }


export default reducers  =  combineReducers ({
     newsFeed,
     TopHeadline,
     categoryNews
}); 