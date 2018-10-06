import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import './components/layout';
import Layout from './components/layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://www.myiconfinder.com/uploads/iconsets/86d1e8cc5fd00130bfce118378810039-microphone.png" className="App-logo" alt="logo" />
          <Layout></Layout>
        </header>
      </div>
    );
  }
}

export default App;
