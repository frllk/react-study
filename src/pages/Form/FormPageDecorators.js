/**
 * 表单组件
 */
import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const FormItem = Form.Item

class FormPageDecorators extends Component {
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
    // console.log('FormPageDecorators', Form.useForm())
    return (
      <div>
        <h1>FormPageDecorators</h1>
        <Form>
          <FormItem label="姓名">
            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
          </FormItem>
          <FormItem label="密码">
            <Input type="password" prefix={<LockOutlined className="site-form-item-icon" />} />
          </FormItem>
          <FormItem>
            <Button onClick={this.submit} type="primary">提交</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
export default FormPageDecorators
