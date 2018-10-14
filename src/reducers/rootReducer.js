import { combineReducers } from 'redux'
import giphsReducer from './giphsReducer'
import actionsReducer from './actionsReducer'


export default combineReducers({
    giphs: giphsReducer,
    actions: actionsReducer
})