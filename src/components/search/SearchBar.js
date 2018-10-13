import React, {Component} from 'react'
import { giphySearch } from '../../actions/giphyAPI'
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
        this.props.giphySearch(this.state.term,0)
    }



    render(){
        return(
            <div className="search-bar-container">
                <form onSubmit={this.onSubmit}>
                    <label>Search</label>
                    <input onChange={this.onChange} type="search" />
                    <button type="submit">Submit</button>
                </form>
                
            </div>
            
        )
    }
}

export default connect(null, {giphySearch})(SearchBar)