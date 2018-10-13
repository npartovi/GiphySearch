import React, { Component } from 'react';
import GiphsList from './components/giphs/GiphsList'
import Navbar from './components/layout/NavBar'
import './App.css';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <div className="layout-container">
            <Navbar />
            <GiphsList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
