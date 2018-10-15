import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import GiphsListItem from './GiphsListItem'

class GiphsList extends Component {
    constructor(props){
        super(props)

        this.state = {
            giphs: [],
            searchTerm: "",
            offset: 0,
            favorites: [],
            renderFavorites: false
        }
    }


    // Adds favorite to the browser local storage
    updateFavoritesList = (gif) => {
        let newState = [...this.state.favorites]
        newState.push(gif)
        this.setState({favorites: newState})
        localStorage.setItem("favorites", JSON.stringify(newState))
    }

    // Removes favorite from the local storage
    removeFavoritesList = (gif) => {
        let newState = [...this.state.favorites]
        newState = newState.filter(favorite => favorite !== gif )
        this.setState({favorites: newState})
        console.log(this.state.favorites)
        localStorage.setItem("favorites", JSON.stringify(newState))
    }

    // Sets the State of the favorites array from local storage and adds a eventListener for scroll events
    componentDidMount(){
        if(localStorage.favorites){
            this.setState({favorites: JSON.parse(localStorage.favorites)})
        }
        window.addEventListener('scroll', this.trackScrolling)
    }

    // Removes the eventListener once the component unmounts to prevent side effects 
    componentWillUnmount(){
        window.removeEventListener('scroll', this.trackScrolling)
    }


    // Listens to the Redux Store to determine what gifs to render
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

    // Initial Loading of the trending gifs before component mounts
    componentWillMount(){
        this.renderGiphs(this.state.term)
    }

    // Determines to render Trending giphs or Searched gifs(also includes the random word gifs)
    renderGiphs = () => {
        if(this.state.searchTerm === ""){
            this.renderTrendingGiphs()
        }else{
            this.renderSearchTermGiphs()
        }
    }


    // API call to the Giphy endpoint to retrieve the first 25 trending gifs. Also sets the offset in the component state so that
    //user scrolls down the page, it will pull in the next 25 gifs

    renderTrendingGiphs = () => {
        axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=7BsS1QpFETQKbZQLn7Uu18yMeTr9OGBq&limit=${this.state.limit}&offset=${this.state.offset}`)
            .then(res => {
                let newState = res.data.data
                this.setState({giphs: this.state.giphs.concat(newState), offset: 25 + this.state.offset})
            })
            .catch(err => {
                console.error(err)
            })
    }

    // API call to the Giphy endpoint to retrieve the first 25 gifs based on the search term. Also sets the offset in the component state so that
    // user scrolls down the page, it will pull in the next 25 gifs
    renderSearchTermGiphs = () => {
        axios.get(`http://api.giphy.com/v1/gifs/search?api_key=7BsS1QpFETQKbZQLn7Uu18yMeTr9OGBq&q=${this.state.searchTerm}&limit=25&offset=${this.state.offset}`)
        .then(res => {
            let newState = res.data.data
            this.setState({giphs: this.state.giphs.concat(newState), offset: 25 + this.state.offset})
        })
        .catch(err => {
            console.error(err)
        })
    }

    // Used as a callback for the scroll eventListener. Determines where on the page the user is and once the user is
    // further down the page, it will make another API call to get the next 25 gifs.
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
                <GiphsListItem text={"Add To Favorites"} updateFavorites={this.updateFavoritesList} key={idx} gif={gif} />  
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
    actions: state.actions
})

export default connect(mapStateToProps,null)(GiphsList)