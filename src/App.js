import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import BulletinList from './Components/BulletinList/BulletinList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BulletinList />
      </div>
    );
  }
}

export default App;
