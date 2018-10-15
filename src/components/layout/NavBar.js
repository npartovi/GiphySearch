import React, {Component} from 'react'
import SearchBar from '../search/SearchBar';
import { connect } from 'react-redux';
import { renderTrendingGifs, renderFavoriteGifs } from '../../actions/giphyAPI'


class NavBar extends Component {

    renderTrending = () => {
        this.props.renderTrendingGifs()
    }

    renderFavorites = () => {
        this.props.renderFavoriteGifs()
    }

    render(){

        return(
            <nav className="navbar-container">
                <div className="navbar-wrapper">
                    <div className="search-bar-container">
                        <SearchBar />
                    </div>
                    <div className="links-bar-container">
                        <a href="/" onClick={this.renderTrending} className="btn"><span>Trending<i class="fa fa-globe fa-lg" aria-hidden="true"></i></span></a>
                        <a href="/" onClick={this.renderFavorites} className="btn"><span>Favorites<i class="fa fa-heart fa-lg" aria-hidden="true"></i></span></a>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    actions: state.actions
})

export default connect(mapStateToProps, {renderTrendingGifs, renderFavoriteGifs})(NavBar)
