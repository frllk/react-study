import React, { Component } from 'react'
import { Consumer } from '../AppContext'

export default class TabBar extends Component {
  render () {
    return (
      <Consumer>
        {
          ctx => <TabBarHandle {...ctx} />
        }
      </Consumer>
    )
  }
}

/* function TabBarHandle (props) {
  console.log('TabBarHandle', props)
  const { userName, age } = props.userInfo
  return (
    <div>
      <h3>TabBar</h3>
      <p>{userName} - {age}</p>
    </div>
  )
} */
function TabBarHandle (props) {
  return (
    <div className="tabBar">
      <h3>TabBarHandle</h3>
    </div>
  )
}