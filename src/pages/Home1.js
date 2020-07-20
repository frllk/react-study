import React from 'react'
import Layout from './Layout'
import { Consumer, consumerHandle } from '../AppContext'

/* export default class Home extends React.Component {
  render () {
    return <Consumer>{(ctx) => <HomeHandle {...ctx} />}</Consumer>
  }
} */

function HomeHandle (props) {
  return (
    <Layout title="商城首页">
      <div>
        <h1>Home</h1>
      </div>
    </Layout>
  )
}
export default consumerHandle(HomeHandle)