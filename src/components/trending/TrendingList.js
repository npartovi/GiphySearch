import React, {Component} from 'react'
import { giphyTrending } from '../../actions/giphyAPI'
import {connect} from 'react-redux'

import TrendingListItem from './TrendingListItem'

class TrendingList extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.giphyTrending()
    }

    render(){

        const { trendingList } = this.props
        
        const trendingGiphsList = trendingList.map(gif => (
            <TrendingListItem gif={gif} />  
        ))

        return(
            <div>
                {trendingGiphsList}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    trendingList: state.trending
})

export default connect(mapStateToProps, {giphyTrending})(TrendingList)