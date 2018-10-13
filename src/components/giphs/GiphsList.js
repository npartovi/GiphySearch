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
        this.props.giphyTrending(this.state.offset)
    }

    componentWillReceiveProps(nextProps){
        this.setState({giphs: nextProps.giphs})
    }

    render(){

        const { giphs } = this.state
        console.log(giphs)
        
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