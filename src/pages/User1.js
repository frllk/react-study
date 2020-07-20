import React from 'react'
import { Consumer } from '../AppContext';
import Layout from './Layout';

export default class User extends React.Component {
  render () {
    return <Consumer>{(ctx) => <UserHandle {...ctx} />}</Consumer>
  }
}

function UserHandle (props) {
  console.log('UserHandle', props)
  return (
    <Layout title="用户信息页面">
      <div>
        <h1>我是User页面</h1>
      </div>
    </Layout>
  )
}
