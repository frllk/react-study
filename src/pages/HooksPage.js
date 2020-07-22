/**
 * Hooks组件
 * Hook是React16.8⼀个新增项，它可以让你在不编写 class 的情况下使⽤ state 以及其他的 React 特性。
 * Hooks的特点：
 * 使你在⽆需修改组件结构的情况下复⽤状态逻辑
 * 可将组件中相互关联的部分拆分成更⼩的函数，复杂组件将变得更容易理解
 * 更简洁、更易理解的代码
 */

import React, { useState, useEffect } from 'react'
import { AddFruit, FruitList } from '../components/Fruits'


export default function HooksPage () {
  const [date, setDate] = useState(new Date())
  const [fruits, setFruits] = useState(['apple', 'banana'])
  useEffect(() => {
    console.log('useEffect');
    const timerId = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => clearInterval(timerId) // 卸载的时候执行  内存清理
  }, [date]) // 点击的时候useEffect一直执行，效率比较低。第二个参数： [date]，表示里面的执行只跟date有关，外面的跟里面没关系

  return (
    <div>
      HooksPage
      <p>{date.toLocaleString()}</p>
      <AddFruit addFruit={item => setFruits([item, ...fruits])} />
      <FruitList fruits={fruits} setFruits={setFruits} />
    </div>
  )
}

