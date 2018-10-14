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

    onSubmit = (e) => {
        e.preventDefault()
        this.props.updateSearchTerm(this.state.term)
    }

    render(){
        return(
            <div className="search-bar-wrapper">
                <form onSubmit={this.onSubmit}>
                    <input id="searchText" onChange={this.onChange} type="search" placeholder="Search for a Giphy..." />
                    <i class="fas fa-search fa-lg"></i>
                </form>
            </div>
            
        )
    }
}

export default connect(null, {updateSearchTerm})(SearchBar)