import React, {Component} from 'react'
import SearchBar from '../search/SearchBar';
import { connect } from 'react-redux';
import { giphyTrending, giphyRandom } from '../../actions/giphyAPI'

class NavBar extends Component {
    constructor(props){
        super(props)
    }

    loadTrendingGiphs = () => {
        this.props.giphyTrending()
    }

    loadRandomGiphs = () => {
        this.props.giphyRandom()
    }


    render(){
        return(
            <nav className="navbar-container">
                <div className="search-bar-container">
                    <SearchBar />
                </div>
                <h1 onClick={this.loadTrendingGiphs}>Trending</h1>
                <h1 onClick={this.loadRandomGiphs}>Random</h1>
            </nav>
        )
    }
}

export default connect(null, {giphyTrending, giphyRandom})(NavBar)
