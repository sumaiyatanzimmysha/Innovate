import React from 'react'

const Button = ( {text, className }) => {
   
  return (
     <button className={ `${className} font-open text-[18px]   font-semibold text-2xl py-[14px] px-[28px] text-white bg-hovercolor   `} >{text}</button>
  )
}

 

export default Button