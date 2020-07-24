/**
 * 表单组件
 */
import React, { Component } from 'react'
import { Form, Input, Button, Icon } from 'antd'
const FormItem = Form.Item

export default class FormPage extends Component {
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
    const { name, password } = this.state
    return (
      <div>
        <h1>FormPage</h1>
        <Form>
          <FormItem label="姓名">
            <Input prefix={<Icon type="user" />} onChange={(event) => this.changeInp('name', event)} />
          </FormItem>
          <FormItem label="密码">
            <Input type="password" prefix={<Icon type="lock" />} onChange={(event) => this.changeInp('password', event)} />
          </FormItem>
          <FormItem>
            <Button onClick={this.submit} type="primary">提交</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
