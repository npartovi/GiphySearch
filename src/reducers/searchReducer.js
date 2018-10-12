import {SEARCH_RESULT_GIPHS} from '../actions/types'

const initialState = []

const searchReducer = (state = initialState, action) => {
    Object.freeze(state)
    let newState
    switch(action.type){
        case SEARCH_RESULT_GIPHS:
            newState = action.payload
            return newState
        default:
            return state
    }
}

export default searchReducer