import {UPDATE_SEARCH_TERM, RENDER_TRENDING_GIPHS, RENDER_FAVORITE_GIPHS } from './types'


// Updates the redux store with the passed in term to search Giphy Api with.
export const updateSearchTerm = (term) => dispatch => {
    dispatch({
        type: UPDATE_SEARCH_TERM,
        payload: term
    })
}

// Updates the redux store to set Trending gifs to true for rendering
export const renderTrendingGifs = () => dispatch => {
    dispatch({
        type: RENDER_TRENDING_GIPHS
    })
}

// Updates the redux store to set Favorite gifs to true for rendering
export const renderFavoriteGifs = () => dispatch => {
    dispatch({
        type: RENDER_FAVORITE_GIPHS
    })
}