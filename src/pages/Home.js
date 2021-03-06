import React, { Component } from 'react'
import { Consumer } from '../AppContext';
import TabBar from '../components/TabBar';

export default class Home extends Component {

  // constructor(props) {
  //   super(props)
  //   this.setCounter = this.setCounter.bind(this) // 解决：直接定义函数方法找不到this问题 ~~~
  // }

  // 使用state属性维护状态
  state = {
    date: new Date(),
    counter: 0 // setState 同步异步问题**************************

  }

  // 挂载时
  componentDidMount () {
    console.log('home loaded!')
    /* // 组件挂载时启动定时器每秒更新状态
    this.timerId = setInterval(() => {
      // 使用setState方法更新状态
      this.setState({
        date: new Date()
      })
    }, 1000); */

    /* // 方式三
    document.getElementsByTagName('button')[0].addEventListener('click', () => {
      this.setState({
        counter: this.state.counter + 1
      })
      this.setState({
        counter: this.state.counter + 2
      })
      console.log('sta', this.state.counter);
    }) */
  }

  // 卸载时
  componentWillUnmount () {
    console.log('Home组件卸载');
    // 组件卸载时-停止定时器
    clearInterval(this.timerId)
  }

  // setCounter () {
  //   // 问题：这么写会找不到this ===> 推荐使用箭头函数 ~~~
  //   this.setState({
  //     counter: this.state.counter + 1
  //   })
  // }

  setCounter = () => {
    // setState 异步
    /* this.setState({
      counter: this.state.counter + 1
    })
    this.setState({
      counter: this.state.counter + 2
    }, () => {
      console.log('sta', this.state.counter);
    }) */
    // setState 实现同步==========================
    /* // 方式一
    this.setState((nextState) => {
      return {
        counter: nextState.counter + 1
      }
    })
    this.setState((nextState) => {
      return {
        counter: nextState.counter + 2
      }
    }) */
    // 方式二
    setTimeout(() => {
      this.setState({
        counter: this.state.counter + 1
      })
      this.setState({
        counter: this.state.counter + 2
      })
      console.log('sta-cb', this.state.counter); // 新值
    }, 0);
    console.log('sta', this.state.counter); // 旧值
  }

  render () {
    const str = '我是home页面'
    console.log(str, this.props)
    const { date, counter } = this.state
    return (
      <div>
        <h1>
          {str}
        </h1>
        <p>{date.toLocaleString()}</p>
        <p>{counter}</p>
        <button onClick={this.setCounter}>修改counter</button>
        <hr />
        <Consumer>{(ctx) => <HomeHandle {...ctx} />}</Consumer>
        <TabBar></TabBar>
      </div>
    )
  }
}

function HomeHandle (props) {
  console.log('hh', props)
  return (
    <div>
      <h2>HomeHandle</h2>
      <p>{props.userInfo.userName}</p>
    </div>
  )
}