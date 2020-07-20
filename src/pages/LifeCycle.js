/**
 * 生命周期
 */
import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    console.log('constructor', this.state.counter);
  }
  /* // 组件挂载之前
  componentWillMount () {
    console.log('componentWillMount', this.state.counter);
  } */
  // 组件挂载之后
  componentDidMount () {
    console.log('componentDidMount', this.state.counter);
  }

  /* // 组件更新之前
  componentWillUpdate () {
    console.log('componentWillUpdate', this.state.counter);
  } */

  static getDerivedStateFromProps (props, state) {
    // getDerivedStateFromProps 会在调用 render 方法之前调用。并且在初始挂载及后续更新时都会被调用。
    // 它应该返回一个对象来更新 state，如果返回 null  则不更新任何内容
    const { counter } = state
    console.log('getDerivedStateFromProps', counter);
    return counter < 8 ? null : { counter: 0 }
  }

  // 在render之后，在componentDidUpdate之前。
  getSnapshotBeforeUpdate (prevProps, prevState) {
    const { counter } = prevState
    console.log('getSnapshotBeforeUpdate', counter);
    return null
  }

  // 组件更新之后
  componentDidUpdate () {
    console.log('componentDidUpdate', this.state.counter);
  }

  // 组件卸载之前
  componentWillUnmount () {
    console.log('componentWillUnmount', this.state.counter);
  }

  // 组件是否render
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', this.state.counter, nextState.counter);
    const { counter } = this.state
    // 优化项目，避免不必要的render
    return counter !== 5
  }

  setCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render () {
    console.log('render');
    const { counter } = this.state
    return (
      <div>
        <h1>我是LifeCycle页面</h1>
        <p>{counter}</p>
        <button onClick={this.setCounter}>改变counter</button>
        {/* {
          !!(counter % 2) && <Foo />
        } */}
        {
          <Foo counter={counter} />
        }
      </div>
    )
  }
}

class Foo extends Component {
  componentWillUnmount () {
    // 组件卸载之前
    console.log('Foo组件componentWillUnmount');
  }
  render () {
    return (
      <div style={{ border: '2px solid #999', margin: '10px' }}>
        <h1>我是Foo组件</h1>
        <p>Foo counter: {this.props.counter}</p>
      </div>
    )
  }
}
