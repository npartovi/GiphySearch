import {UPDATE_SEARCH_TERM, RENDER_TRENDING_GIPHS, RENDER_FAVORITE_GIPHS } from './types'



export const updateSearchTerm = (term) => dispatch => {
    dispatch({
        type: UPDATE_SEARCH_TERM,
        payload: term
    })
}

export const renderTrendingGifs = () => dispatch => {
    dispatch({
        type: RENDER_TRENDING_GIPHS
    })
}

export const renderFavoriteGifs = () => dispatch => {
    dispatch({
        type: RENDER_FAVORITE_GIPHS
    })
}