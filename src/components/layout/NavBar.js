import React, {Component} from 'react'
import SearchBar from '../search/SearchBar';
import { connect } from 'react-redux';
import { renderTrendingGifs, renderFavoriteGifs } from '../../actions/giphyAPI'


class NavBar extends Component {

    renderTrending = (e) => {
        e.preventDefault()
        this.props.renderTrendingGifs()
    }

    renderFavorites = (e) => {
        e.preventDefault()
        this.props.renderFavoriteGifs()
    }

    render(){

        return(
            <nav className="navbar-container">
                <div className="navbar-wrapper">
                    <div class="title">
                        <div class="title-word">Giphy</div>
                        <div class="title-word">Search</div>
                    </div>
                    <div className="search-bar-container">
                        <SearchBar />
                    </div>
                    <div className="links-bar-container">
                        <a href="/" onClick={this.renderTrending} className="btn"><span>Trending<i className="fa fa-globe fa-lg" aria-hidden="true"></i></span></a>
                        <a href="/" onClick={this.renderFavorites} className="btn"><span>Favorites<i className="fa fa-heart fa-lg" aria-hidden="true"></i></span></a>
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
