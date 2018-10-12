import React, {Component} from 'react'
import { connect } from 'react-redux'
import SearchListItem from './SearchListItem'


class SearchList extends Component {
    constructor(props){
        super(props)
    }

    render(){
        
        const searchGiphsList = this.props.searchResults.map((gif,idx) => (
            <SearchListItem key={idx} gif={gif} />
        ))


        return(
            <div>
                <h1>This is where the searh results go</h1>
                {searchGiphsList}
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    searchResults: state.search
})

export default connect(mapStateToProps,null)(SearchList)