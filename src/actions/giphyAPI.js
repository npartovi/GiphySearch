import axios from 'axios'
import keys from '../config'
import { GET_ALL_TRENDING_GIPHS, SEARCH_RESULT_GIPHS } from './types'

export const giphyTrending = (offset) => dispatch => {

    console.log(offset)

    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${keys.giphyAPIKey}&limit=25&offset=${offset}`)
        .then(res => {
            dispatch({
                type: GET_ALL_TRENDING_GIPHS,
                payload: res.data.data
            })
        })
        .catch(err => {
            console.error(err)
        })
}

export const giphySearch = (term,offset) => dispatch => {
    console.log(offset)

    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${keys.giphyAPIKey}&q=${term}&limit=25&offset=${offset}`)
        .then(res => {
            dispatch({
                type: GET_ALL_TRENDING_GIPHS,
                payload: res.data.data
            })
        })
        .catch(err => {
            console.error(err)
        })
}

export const giphyRandom = () => dispatch => {

    axios.get(`http://api.giphy.com/v1/gifs/random?limit=25&api_key=${keys.giphyAPIKey}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err)
        })
}