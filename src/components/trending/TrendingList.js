import React, {Component} from 'react'
import { giphyTrending } from '../../actions/giphyAPI'
import {connect} from 'react-redux'

class TrendingList extends Component {

    constructor(props){
        super(props)

        this.state = {
            trendingItems: []
        }
    }

    componentDidMount(){
        this.props.giphyTrending()
    }

    render(){
        console.log(this.state)

        return(
            <h1>This is the TrendingList</h1>
        )
    }
}

export default connect(null, {giphyTrending})(TrendingList)