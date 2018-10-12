import React, { Component } from 'react';
import TrendingList from './components/trending/TrendingList'
import SearchBar from './components/search/SearchBar'
import SearchList from './components/search/SearchList'
import './App.css';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <TrendingList />
          <SearchBar />
          <SearchList />
        </div>
      </Provider>
    );
  }
}

export default App;
