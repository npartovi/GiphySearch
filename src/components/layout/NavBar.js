import React, { Component } from "react";
import SearchBar from "../search/SearchBar";
import randomWords from "random-words";
import { connect } from "react-redux";
import {
  renderTrendingGifs,
  renderFavoriteGifs,
  updateSearchTerm
} from "../../actions/giphyAPI";

class NavBar extends Component {
  // Sets off action to the redux store to render Trending gifs
  renderTrending = e => {
    e.preventDefault();
    this.props.renderTrendingGifs();
  };

  // Sets off action to the redux store to render Favorite gifs
  renderFavorites = e => {
    e.preventDefault();
    this.props.renderFavoriteGifs();
  };

  // Sets off action to the redux store to render Random Gifs
  renderRandom = e => {
    e.preventDefault();
    let randomWord = randomWords();
    this.props.updateSearchTerm(randomWord);
  };

  render() {
    return (
      <nav className="navbar-container">
        <div className="navbar-wrapper">
          <div className="title">
            <div className="title-word">Giphy</div>
            <div className="title-word">Search</div>
          </div>
          <div className="search-bar-container">
            <SearchBar />
          </div>
          <div className="links-bar-container">
            <a href="/" onClick={this.renderTrending} className="btn">
              <span>
                Trending
                <i className="fa fa-globe fa-lg" aria-hidden="true" />
              </span>
            </a>
            <a href="/" onClick={this.renderFavorites} className="btn">
              <span>
                Favorites
                <i className="fa fa-heart fa-lg" aria-hidden="true" />
              </span>
            </a>
            <a href="/" onClick={this.renderRandom} className="btn">
              <span>
                Random
                <i className="fas fa-random fa-lg" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  actions: state.actions
});

export default connect(
  mapStateToProps,
  { renderTrendingGifs, renderFavoriteGifs, updateSearchTerm }
)(NavBar);
