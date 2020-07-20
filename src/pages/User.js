import React, { useState, useEffect } from 'react'
import { Consumer } from '../AppContext';
import Layout from './Layout';

/* // hooks
export default function User () {
  // console.log('React', React)
  // const date = new Date()

  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => clearInterval(timerId)
  })
  return (
    <div>
      <h1>我是User页面</h1>
      <Consumer>
        {(d) => {
          return <p>{d.userInfo.userName}</p>
        }}
      </Consumer>
      <p>{date.toLocaleString()}</p>
    </div>
  )
} */

export default class User extends React.Component {
  render () {
    return (
      <Layout title="用户信息页面">
        <div>
          <h1>我是User页面</h1>
        </div>
      </Layout>
    )
  }
}
/* export default class User extends React.Component {
  render () {
    return (
      <Layout title="用户信息页面">
        {{
          btn: <button>按钮</button>,
          content: '我是内容'
        }}
      </Layout>
    )
  }
} */
