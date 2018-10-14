import React, {Component} from 'react'
import {updateSearchTerm } from '../../actions/giphyAPI'
import {connect} from 'react-redux'

class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            term: ""
        }
    }

    onChange = (e) => {
        this.setState({term: e.target.value})
    }

    onSubmit = () => {
        this.props.updateSearchTerm(this.state.term)
    }

    render(){
        return(
            <div className="search-bar-wrapper">
                    <input id="searchText" onChange={this.onChange} type="search" placeholder="Search for a Giphy..." />
                    <button onClick={this.onSubmit}>Submit</button>
            </div>
            
        )
    }
}

export default connect(null, {updateSearchTerm})(SearchBar)