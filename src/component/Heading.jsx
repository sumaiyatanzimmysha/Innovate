import React from 'react'

const Heading = ({text, className}) => {
  return (
    
     <h1 className={`  text-regular font-extrabold text-listcolor font-open ${className}`}>{text}</h1>
  )
}

export default Heading