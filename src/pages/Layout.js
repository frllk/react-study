import React, { Component } from 'react'
import TabBar from '../components/TabBar'

export default class Layout extends Component {

  componentDidMount () {
    const { title = '商城' } = this.props
    document.title = title
  }

  render () {
    console.log('layout', this.props)
    const { children, showTabbar = true } = this.props
    const a = []
    if (children.$$typeof) {
      // 不具名插槽
      a.push(children)
    } else {
      // 具名插槽
      for (let item in children) {
        a.push(children[item])
      }
    }
    return <div>
      {a.map((item, index) => <div key={'child' + index}>{item}</div>)}
      {showTabbar && <TabBar />}
    </div>
  }
}
