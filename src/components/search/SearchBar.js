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
                    <input id="searchText" onChange={this.onChange} type="search" />
                    <i class="fa fa-search fa-lg"></i><span class="verticleLine"></span>
            </div>
            
        )
    }
}

export default connect(null, {updateSearchTerm})(SearchBar)