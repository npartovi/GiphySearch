import React, {Component} from 'react'
import { giphyTrending } from '../../actions/giphyAPI'
import {connect} from 'react-redux'
import axios from 'axios'

import GiphsListItem from './GiphsListItem'

class GiphsList extends Component {
    constructor(props){
        super(props)

        this.state = {
            giphs: this.props.giphs,
            searchTerm: "",
            offset: 0

        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.trackScrolling)   
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.trackScrolling)
    }

    componentWillMount(){
        this.renderGiphs(this.state.term)
    }

    renderGiphs = () => {
        
        if(this.state.searchTerm === ""){
            this.renderTrendingGiphs()
        }
    }

    renderTrendingGiphs = () => {
        axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=lIT0h2iTdcoFAyUGDu5Qvkb9NgfhOCNN&limit=25`)
            .then(res => {
                console.log(res)
                this.setState({giphs: res.data.data})
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
        
        if (windowBottom >= docHeight - (1/2)) {
            
        }
    }

    render(){

        console.log(this.state.giphs)
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
    search: state.searchTerm
})

export default connect(mapStateToProps, {giphyTrending})(GiphsList)