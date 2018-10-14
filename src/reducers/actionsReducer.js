import { UPDATE_SEARCH_TERM, RENDER_TRENDING_GIPHS } from '../actions/types'

const initialState = {
    renderSearch: "",
    renderTrending: true
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
                renderSearch: ""
            }
        default:
            return state
    }
}

export default actionsReducer

