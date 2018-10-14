import { UPDATE_SEARCH_TERM, RENDER_TRENDING_GIPHS, RENDER_FAVORITE_GIPHS } from '../actions/types'

const initialState = {
    renderSearch: "",
    renderFavorites: false
}

const actionsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_SEARCH_TERM:
            return{
                ...state,
                renderSearch: action.payload,
                renderFavorites: false
            }
        case RENDER_TRENDING_GIPHS:
            return {
                ...state,
                renderSearch: "",
                renderFavorites: false
            }
        case RENDER_FAVORITE_GIPHS:
            return{
                ...state,
                renderFavorites: true,
                renderSearch: ""
            }
        default:
            return state
    }
}

export default actionsReducer

