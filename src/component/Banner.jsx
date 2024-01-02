import React from 'react'

const Price = ({text, className}) => {
  return (
    <div className={` ${className} text-listcolor text-[56px] font-open font-bold`}>{text}</div>
  )
}

export default Price