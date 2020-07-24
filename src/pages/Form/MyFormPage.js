import React, { Component } from 'react'

export default class MyFormPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }
  changeInp = (filed, event) => {
    console.log('file', filed, event)
    this.setState({
      [filed]: event.target.value
    })
  }
  submit = () => {
    console.log('submit', this.state)
  }

  render () {
    return (
      <div>
        <h1>MyFormPage</h1>
        <input type="text" />
        <input type="password" />
        <button>提交</button>
      </div>
    )
  }
}
