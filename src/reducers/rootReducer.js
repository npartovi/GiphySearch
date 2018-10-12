import { combineReducers } from 'redux'
import trendingReducer from './trendingReducer'
import searchReducer from './searchReducer'


export default combineReducers({
    trending: trendingReducer,
    search: searchReducer
})