import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`w-container`}>{children}</div>
  )
}

export default Container