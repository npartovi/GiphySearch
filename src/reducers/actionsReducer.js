import { UPDATE_SEARCH_TERM, RENDER_TRENDING_GIPHS } from '../actions/types'

const initialState = {
    renderSearch: "",
    renderRandom: false
}

const actionsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_SEARCH_TERM:
            return{
                ...state,
                renderSearch: action.payload
            }
        case RENDER_TRENDING_GIPHS:
            return {
                ...state,
                renderSearch: "",
                renderRandom: false
            }
        default:
            return state
    }
}

export default actionsReducer

