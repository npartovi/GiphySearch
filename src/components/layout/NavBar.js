import React, {Component} from 'react'
import SearchBar from '../search/SearchBar';
import { connect } from 'react-redux';
import { giphyTrending, giphyRandom } from '../../actions/giphyAPI'

class NavBar extends Component {
   
    render(){
        return(
            <nav className="navbar-container">
                <div className="search-bar-container">
                    <SearchBar />
                </div>
            </nav>
        )
    }
}

export default connect(null, {giphyTrending, giphyRandom})(NavBar)
