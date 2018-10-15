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

    // Sets the term to the state of the SearchBar component
    onChange = (e) => {
        this.setState({term: e.target.value})
    }

    // Sends the term to the dispatch action so that it can be set in the redux store
    onSubmit = (e) => {
        e.preventDefault()
        this.props.updateSearchTerm(this.state.term)
    }

    render(){
        return(
            <div className="search-bar-wrapper">
                <form onSubmit={this.onSubmit}>
                    <input id="searchText" onChange={this.onChange} type="search" placeholder="Search for a Giphy..." />
                    <span onClick={this.onSubmit} className="input-addon"><i class="fas fa-search fa-lg"></i></span>
                </form>
            </div>
            
        )
    }
}

export default connect(null, {updateSearchTerm})(SearchBar)