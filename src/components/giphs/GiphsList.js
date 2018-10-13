import React, {Component} from 'react'
import { giphyTrending } from '../../actions/giphyAPI'
import {connect} from 'react-redux'

import GiphsListItem from './GiphsListItem'

class GiphsList extends Component {

    componentDidMount(){
        this.props.giphyTrending()
    }

    render(){

        const { giphs } = this.props
        
        const GiphsList = giphs.map((gif,idx) => (
            <GiphsListItem key={idx} gif={gif} />  
        ))

        return(
            <div className="trending-list-container">
                <h1>Trending List</h1>
                <div className="trending-list-wrapper">
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