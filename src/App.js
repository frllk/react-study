import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js'
import User from './pages/User.js'
import Search from './pages/Search.js'

const store = {
  userInfo: {
    userName: 'xiaoming',
    age: 18
  }
}

function App () {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <User /> */}
      <Search store={store} />
    </div>
  );
}

export default App;
