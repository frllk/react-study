import React from 'react';

export const { Provider, Consumer } = React.createContext()

/**
 * 高阶组件
 * @param {*} Cmp 组件名
 */
export const consumerHandle = Cmp => props => {
  return <Consumer>{ctx => <Cmp {...ctx} {...props} />}</Consumer>
}
