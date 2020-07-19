import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js'
import User from './pages/User.js'
import Search from './pages/Search.js'
import LifeCycle from './pages/LifeCycle'

const store = {
  userInfo: {
    userName: 'xiaoming',
    age: 18
  }
}

function tellme (msg) {
  console.log('tellme', msg);
}

function App () {
  // console.log('App');
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <User /> */}
      {/* <Search store={store} tellme={tellme} /> */}
      <LifeCycle />
    </div>
  );
}

export default App;
