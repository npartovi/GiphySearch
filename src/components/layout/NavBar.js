import React, {Component} from 'react'
import SearchBar from '../search/SearchBar';
import { connect } from 'react-redux';
import { renderTrendingGifs } from '../../actions/giphyAPI'


class NavBar extends Component {

    renderTrending = () => {
        this.props.renderTrendingGifs()
    }

    render(){
        return(
            <nav className="navbar-container">
                <div className="navbar-wrapper">
                    <div className="search-bar-container">
                        <SearchBar />
                    </div>
                    <div className="links-bar-container">
                        <button onClick={this.renderTrending}>Trending</button>
                        <i className="fa fa-search fa-lg"></i><span class="verticleLine"></span>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    actions: state.actions
})

export default connect(mapStateToProps, {renderTrendingGifs})(NavBar)
