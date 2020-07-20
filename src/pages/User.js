import React, { useState, useEffect } from 'react'
import { Consumer } from '../AppContext';

// hooks
export default function User () {
  // console.log('React', React)
  // const date = new Date()

  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => clearInterval(timerId)
  })
  return (
    <div>
      <h1>我是User页面</h1>
      <Consumer>
        {(d) => {
          return <p>{d.userInfo.userName}</p>
        }}
      </Consumer>
      <p>{date.toLocaleString()}</p>
    </div>
  )
}
