import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import SearchBar from '../src/components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/"  component={SearchBar}/>
      </Router>
    )
  }
}
export default App;
