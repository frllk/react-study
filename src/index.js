import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // 最近的react版本,dev模式下render使用的是strict mode,strict mode的通过两次调用constructor和render函数来更好的检测不符合预期的side effects
  // 所以 出现两次情况  生产环境不会有的

  // <React.StrictMode>
  <App />
  // </React.StrictMode >
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
