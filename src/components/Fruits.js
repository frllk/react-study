import React, { useState, useEffect } from 'react'
// 新增
export function AddFruit ({ addFruit }) {
  const [name, setName] = useState('')
  return (
    <>
      <input type="text" value={name} onChange={(e) => {
        setName(e.target.value)
      }} />
      <button onClick={() => { addFruit(name) }}>点击添加</button>
    </>
  )
}

export function FruitList ({ fruits, setFruits }) {
  const delCur = delIndex => {
    const tem = [...fruits]
    tem.splice(delIndex, 1)
    setFruits(tem)
  }
  return <div>
    <ul>
      {
        fruits.map((item, i) => <li key={'fruit' + i} onClick={() => {
          delCur(i)
        }}>{item}</li>)
      }

    </ul>
  </div>
}