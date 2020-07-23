/**
 * 高阶组件
 */
import React, { Component } from 'react'



// 高阶组件是一个函数，它的参数是一个组件
const foo = Com => props => {
  return <div className="border"><Com {...props} /></div>
}

const foo2 = Com => props => {
  return <div className="border" style={{ border: '2px dotted red' }}><Com {...props} /></div>
}


// 装饰器方式
@foo2
@foo
class Child extends Component {
  render () {
    return <div>Child</div>
  }
}

/* function Child (props) {
  return <div>Child</div>
} */

export default class HocPage extends Component {
  render () {
    // const Foo = foo2(foo(Child))
    return (
      <div>
        <h1>HocPage</h1>
        {/* <Foo /> */}
        <Child />
      </div>
    )
  }
}
