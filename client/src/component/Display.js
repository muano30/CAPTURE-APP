import React from 'react'
import Navbar from './Navbar'

const Display = (props) => {
  const { list } = props
  // console.log('list', list)


  return (
    <div>
      <Navbar />

      <div>{list.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.firstname}</li>
            <li>{item.lastname}</li>
            <li>{item.dateofbirth}</li>
            <li>{item.grade}</li>
          </ul>
        )
      })}</div>
    </div>
  )
}

export default Display