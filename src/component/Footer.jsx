import React from 'react'
import Container from './Container'
import Image from './Image'
import Logo from '../assets/logo.png'
 
import List from './List'
import Heading from './Heading'
import Flex from './Flex'
const Footer = () => {
  return (
    <Container>
         
        <div className="bg-background h-[631px] mt-[100px]">
           <div className="pl-[380px]">
           <Image src={Logo} className=' pt-[140px] transition-transform transform hover:scale-110 '/>
            
             
            <p className='text-white text-[18px] capitalize pt-[44px] pr-[500px] font-nun font-regular'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
            <p className='pt-[140px] font-nun  text-white text-[18px]'>@20201 Innovate.All rights reserved.</p>
           </div>

           <div className="ml-[917px] mt-[-330px] text-white">
            <Heading text= 'Features' className='text-white'/>
           <ul className='py-[50px]'>
        <List text= "Home" className=' '/>
      <List text= "Shop"   />
      <List text= "About"/>
      <List text= "Contacts"/>
      <List text= "Journal"/>
        </ul>
        </div>
        {/* ===== */}
        <div className="ml-[1050px] mt-[-243px] ">
            <Heading text= 'Products' className='text-white'/>
           <ul className='py-[50px]'>
        <List text= "Task Management" className='text-white '/>
      <List text= "Company growth" className="text-white "/>
      <List text= "Time tracking" className='text-white '/>
      
        </ul>
        </div>
        {/* ====== */}
        <div className="ml-[1200px] mt-[-197px] ">
            <Heading text= 'Support' className='text-white'/>
           <ul className='py-[50px]'>
        <List text= "Customer service" className='text-white '/>
      <List text= "Accessibility" className="text-white "/>
      <List text= "Contact us" className='text-white '/>
      
        </ul>
        </div>
        <div className=" ml-[1000px] mb-[100px] flex ">
        <p className='pt-[110px] pr-[20px]  font-nun  text-white text-[18px]'>Privacy policy</p>
        <p className='pt-[110px] font-nun  text-white text-[18px]'>Terms & condition</p>
        </div>
        
        </div>
        
      
    </Container>
  )
}

export default Footer