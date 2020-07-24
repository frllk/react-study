import React from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
// import Home from './pages/Home.js'
import Home from './pages/Home1.js'
// import User from './pages/User.js'
import User from './pages/User1.js'
import Search from './pages/Search.js'
import LifeCycle from './pages/LifeCycle'
import HooksPage from './pages/HooksPage';
import HooksReducer from './pages/HooksReducer';
import HooksContext from './pages/HooksContext';
import HocPage from './pages/HocPage';
import FormPage from './pages/Form/FormPage';
import FormPageDecorators from './pages/Form/FormPageDecorators';

// import { Provider, Consumer } from './AppContext'

// const store = {
//   userInfo: {
//     userName: 'xiaoming',
//     age: 18
//   },
//   home: {}
// }

// function tellme (msg) {
//   console.log('tellme', msg);
// }

// function App () {
//   console.log('App');
//   return (
//     <div className="App">
//       <Provider value={store}>
//         <Home />
//         {/* <Consumer>{ctx => <Home {...ctx} />}</Consumer> */}
//         {/* <User /> */}
//       </Provider>
//       {/* <User /> */}
//       {/* <Search store={store} tellme={tellme} /> */}
//       {/* <LifeCycle /> */}
//     </div>
//   );
// }

function Child (props) {
  return <div>Child</div>
}

const foo = Comp => props => {
  return (
    <div style={{ border: '2px solid red', margin: '10px' }}>
      <Comp {...props}></Comp>
    </div>
  )
}

function App () {
  const Foo = foo(Child)
  return (
    <div className="App">
      {/* < Home /> */}
      {/* < User /> */}
      {/* <Child /> */}
      {/* <Foo /> */}
      {/* <HooksPage /> */}
      {/* <HooksReducer /> */}
      {/* <HooksContext /> */}
      {/* 高阶组件 */}
      {/* <HocPage /> */}
      {/* 表单组件 */}
      {/* <FormPage /> */}
      <FormPageDecorators />
    </div>
  );
}
export default App;
