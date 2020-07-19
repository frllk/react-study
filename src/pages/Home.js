import React, { Component } from 'react'

export default class Home extends Component {
  // 使用state属性维护状态
  state = {
    date: new Date()
  }

  // 挂载时
  componentDidMount () {
    // 组件挂载时启动定时器每秒更新状态
    this.timerId = setInterval(() => {
      // 使用setState方法更新状态
      this.setState({
        date: new Date()
      })
    }, 1000);
  }

  // 卸载时
  componentWillUnmount () {
    // 组件卸载时-停止定时器
    clearInterval(this.timerId)
  }

  render () {
    const str = '我是home页面'
    const { date } = this.state
    return (
      <div>
        <h1>
          {str}
        </h1>
        <p>{date.toLocaleString()}</p>
      </div>
    )
  }
}
