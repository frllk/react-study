import React from 'react';

export const Context = React.createContext()
export const { Provider, Consumer } = Context
/**
 * 高阶组件
 * @param {*} Cmp 组件名
 */
export const consumerHandle = Cmp => props => {
  return <Consumer>{ctx => <Cmp {...ctx} {...props} />}</Consumer>
}
