import React from 'react'

const List = ({text,className}) => {
  return (
     <li  > <a href="#" className={` text-list font-dm hover:text-primary text-sm hover:font-bold ${className}`}>{text}</a></li>
  )
}

export default List
