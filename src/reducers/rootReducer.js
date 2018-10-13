import { combineReducers } from 'redux'
import giphsReducer from './giphsReducer'


export default combineReducers({
    giphs: giphsReducer,
})