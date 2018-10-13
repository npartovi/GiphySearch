import { combineReducers } from 'redux'
import giphsReducer from './giphsReducer'
import searchReducer from './searchReducer'


export default combineReducers({
    giphs: giphsReducer,
    searchTerm: searchReducer
})