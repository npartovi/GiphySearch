import { UPDATE_SEARCH_TERM } from '../actions/types'

const initialState = ""

const searchReducer = (state = initialState, action) => {
    Object.freeze(initialState)
    let newState
    switch(action.type){
        case UPDATE_SEARCH_TERM:
            newState = action.payload
            return newState
        default:
            return state
    }
}

export default searchReducer

