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
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.trackScrolling)   
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.trackScrolling)
    }

    componentWillReceiveProps(nextProps, nextState){
        console.log("nextProps", nextProps)
        console.log("nextState", nextState)
        if(nextProps.searchTerm !== this.state.searchTerm){
            this.setState({searchTerm: nextProps.searchTerm, offset: 0, giphs: []}, () => {
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
        
        if (windowBottom >= docHeight - (1)) {
            this.renderGiphs(this.state.searchTerm)
        }
    }

    render(){

        console.log(this.state.offset)
        const { giphs } = this.state

        const GiphsList = giphs.map((gif,idx) => (
            <GiphsListItem key={idx} gif={gif} />  
        ))

        return(
            <div className="giphs-list-container">
                <h1>Trending List</h1>
                <div className="giphs-list-wrapper">
                    {GiphsList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    giphs: state.giphs,
    searchTerm: state.searchTerm
})

export default connect(mapStateToProps, {giphyTrending})(GiphsList)