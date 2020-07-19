import React, { Component } from 'react'

export default class Search extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     name: ''
  //   }
  // }
  state = {
    name: ''
  }
  handlerInp = () => {
    console.log('handlerInp')
  }
  handlerChange = (e) => {
    let val = e.target.value
    this.setState({
      name: val
    })
    // setState 是异步的，输出的是上一次的值
    console.log('handlerChange', this.state.name);
  }
  render () {
    console.log('search页面', this)
    const { name } = this.state
    const { userInfo } = this.props.store
    return (
      <div >
        <h1>我是Search页面</h1>
        <p>{userInfo.userName}-{userInfo.age}</p>
        <button onClick={this.handlerInp}>click</button>
        <input value={name} onChange={this.handlerChange} type="text" />
      </div >
    )
  }
}
