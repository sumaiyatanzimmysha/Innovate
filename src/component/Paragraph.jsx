import React from 'react'

const Paragraph = ({text, className}) => {
  return (
    <p className={`font-pap text-pcolor font-[20px] font-regular ${className}`}>{text}</p>
  )
}

export default Paragraph