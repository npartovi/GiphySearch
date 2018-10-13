import {GET_ALL_TRENDING_GIPHS} from '../actions/types'

const intialState = []

const giphsReducer = (state = intialState, action) => {
    Object.freeze(state)
    let newState
    switch(action.type){
        case GET_ALL_TRENDING_GIPHS:
            newState = action.payload
            return newState
        default:
            return state
    }
}

export default giphsReducer