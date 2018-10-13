import React, {Component} from 'react'
import { giphyTrending } from '../../actions/giphyAPI'
import {connect} from 'react-redux'

import GiphsListItem from './GiphsListItem'

class GiphsList extends Component {
    constructor(props){
        super(props)

        this.state = {
            giphs: [],
            offset: 0
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.trackScrolling)
        this.props.giphyTrending(this.state.offset)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.trackScrolling)
    }

    componentWillReceiveProps(nextProps){
        let newState = this.state.giphs.concat(nextProps.giphs)
        this.setState({giphs: newState, offset: this.state.offset + 1})
    }

    trackScrolling = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        
        if (windowBottom >= docHeight - 1) {
            this.props.giphyTrending(this.state.offset + 1)
        }
    }

    render(){

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
    giphs: state.giphs
})

export default connect(mapStateToProps, {giphyTrending})(GiphsList)