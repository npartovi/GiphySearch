import React, {Component} from 'react'
import { giphyTrending } from '../../actions/giphyAPI'
import {connect} from 'react-redux'
import axios from 'axios'
import GiphsListItem from './GiphsListItem'

import keys from '../../config'

class GiphsList extends Component {
    constructor(props){
        super(props)

        this.state = {
            giphs: this.props.giphs,
            searchTerm: "",
            offset: 0,
            favorites: [],
            renderFavorites: false
        }
    }

    updateFavoritesList = (gif) => {
        let newState = [...this.state.favorites]
        newState.push(gif)
        this.setState({favorites: newState})
        localStorage.setItem("favorites", JSON.stringify(newState))
    }

    removeFavoritesList = (gif) => {
        let newState = [...this.state.favorites]
        newState = newState.filter(favorite => favorite !== gif )
        this.setState({favorites: newState})
        console.log(this.state.favorites)
        localStorage.setItem("favorites", JSON.stringify(newState))
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.trackScrolling)
    }

    componentDidMount(){
        if(localStorage.favorites){
            this.setState({favorites: JSON.parse(localStorage.favorites)})
        }
        window.addEventListener('scroll', this.trackScrolling)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.actions.renderFavorites){
            this.setState({renderFavorites: true})
        }else{
            this.setState({renderFavorites: false})
        }

        if(nextProps.actions.renderSearch !== this.state.searchTerm){
            this.setState({searchTerm: nextProps.actions.renderSearch, offset: 0, giphs: []}, () => {
                this.renderGiphs()
            })
        }
    }

    componentWillMount(){
        this.renderGiphs(this.state.term)
    }

    renderGiphs = () => {
        if(this.state.searchTerm === ""){
            this.renderTrendingGiphs()
        }else{
            this.renderSearchTermGiphs()
        }
    }

    renderTrendingGiphs = () => {
        axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${keys.giphyAPIKey}&limit=${this.state.limit}&offset=${this.state.offset}`)
            .then(res => {
                let newState = res.data.data
                this.setState({giphs: this.state.giphs.concat(newState), offset: 25 + this.state.offset})
            })
            .catch(err => {
                console.error(err)
            })
    }

    renderSearchTermGiphs = () => {
        axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${keys.giphyAPIKey}&q=${this.state.searchTerm}&limit=25&offset=${this.state.offset}`)
        .then(res => {
            let newState = res.data.data
            this.setState({giphs: this.state.giphs.concat(newState), offset: 25 + this.state.offset})
        })
        .catch(err => {
            console.error(err)
        })
    }

    trackScrolling = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        
        if (windowBottom >= docHeight - 100) {
            this.renderGiphs(this.state.searchTerm)
        }
    }

    render(){

        const { giphs, favorites, renderFavorites } = this.state
        let GiphsList

        if(renderFavorites){
            GiphsList = favorites.map((gif,idx) => (
                <GiphsListItem text={"Remove Favorite"} updateFavorites={this.removeFavoritesList} key={idx} gif={gif} />  
            ))
        }else{
            GiphsList = giphs.map((gif,idx) => (
                <GiphsListItem text={"Favorite"} updateFavorites={this.updateFavoritesList} key={idx} gif={gif} />  
            ))
        }
        
        

        return(
            <div className="giphs-list-container">
                <div className="giphs-list-wrapper">
                    {GiphsList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    giphs: state.giphs,
    actions: state.actions
})

export default connect(mapStateToProps, {giphyTrending})(GiphsList)