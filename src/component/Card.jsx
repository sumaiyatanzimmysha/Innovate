import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
 
import Image from './Image'
 import Butt from   "../assets/btn.png"
 import Rec from   "../assets/rec.png"
import Paragraph from './Paragraph'
import Button from './Button'
import Like from   "../assets/like.png"
const Card = () => {
  return (
    <nav>
        <Container>
            <div className="">
                <Heading text='Choose The Right Plan' className= 'text-center text-butcolor text-[48px] mt-[180px] font-bold'/>
               
              <Flex className='mt-[40px] place-content-center '>
                <Heading text='Monthly' className='text-listcolor text-[20px] font-bold font-nun pr-[12px]  '/> 
               
      <Image src={Butt} className='pr-[12px]'/>

       <Heading text='Yearly' className='text-pcolor text-[20px] font-bold font-nun  pr-[12px] '/> 
                  <Image src={Rec}  /> 
                     
               </Flex>

               
                </div>
<Flex>
               <div className="">
             <div className="bg-bg3color w-[370px] h-[288px] mt-[64px] text-center">
                   <Heading text= 'Basic' className='text-[40px]'/>
                   <Paragraph text='Monthly Package' className='text-[30px]'/>
                   <Heading text= '$30' className='text-[40px]'/>
                   <Paragraph text='/Month' className='text-[20px] '/>
             </div>
             <div className="text-center bg-white w-[370px] h-[288px] ">
             <Paragraph text='Responsive Design' className='text-[20px]'/>
             <Paragraph text=' Dynamic Elements' className='text-[20px]'/>
             <Paragraph text='Service Pages' className='text-[20px]'/>  
             <Paragraph text=' Custom Design & Features' className='text-[20px]'/>
 
<Button text='Choose Plan' className= 'text-[16px] bg-gray-500 font-bold text-tcolor  mt-[40px]'/>
             </div>
             </div>  


             <div className="ml-[40px]">
             <div className="bg-bg3color w-[370px] h-[288px] mt-[64px] text-center">
                   <Heading text= 'Professional' className='text-[40px]'/>
                   <Paragraph text='Monthly Package' className='text-[30px]'/>
                   <Heading text= '$60' className='text-[40px]'/>
                   <Paragraph text='/Month' className='text-[20px] '/>
             </div>
             <div className="text-center bg-white w-[370px] h-[288px] ">
             <Paragraph text='Responsive Design' className='text-[20px]'/>
             <Paragraph text=' Dynamic Elements' className='text-[20px]'/>
             <Paragraph text='Service Pages' className='text-[20px]'/>  
             <Paragraph text=' Custom Design & Features' className='text-[20px]'/>
 
<Button text='Choose Plan' className= 'text-[16px] font-bold text-tcolor  mt-[40px]'/>
             </div>
             </div> 


             <div className="ml-[40px]">
             <div className="bg-bg3color w-[370px] h-[288px] mt-[64px] text-center">
                   <Heading text= 'Exclusive' className='text-[40px]'/>
                   <Paragraph text='Monthly Package' className='text-[30px]'/>
                   <Heading text= '$85' className='text-[40px]'/>
                   <Paragraph text='/Month' className='text-[20px] '/>
             </div>
             <div className="text-center bg-white w-[370px] h-[288px] ">
             <Paragraph text='Responsive Design' className='text-[20px]'/>
             <Paragraph text=' Dynamic Elements' className='text-[20px]'/>
             <Paragraph text='Service Pages' className='text-[20px]'/>  
             <Paragraph text=' Custom Design & Features' className='text-[20px]'/>
 
<Button text='Choose Plan' className= 'text-[16px] font-bold text-tcolor  mt-[40px]'/>
             </div>
             </div>
             </Flex>
             
             <Heading text='Selected Works' className='text-[56px] text-listcolor font-bold'/>
             <Paragraph text='We are convinced that aesthetics leads to a form of harmony and provides well-being.' className='text-[18px] mt-[20px] pr-[970px]'/>
                  

             <Heading text='What People Thinks About Us ' className= 'text-center text-butcolor text-[48px] mt-[180px] font-bold'/>
              
             <Flex>
             <div className="mt-[130px]">
             <Image src={Like}/>
             </div>
             
             <div className="mt-[140px] ml-[22px]">
             <Heading text='Denis Zakerburg' className='text-[24px] text-listcolor font-bold'/>
             <Paragraph text='Marketing Management Remmi' className= 'text-[18px] mt-[15px]   font-semibold'/>
             
             </div>
             
            
             </Flex>
             <Paragraph text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration . ' className= 'mt-[22px] pr-[1100px]'/>
             
            
            {/* ===== */}
            <Flex>
             <div className="mt-[130px]">
             <Image src={Like}/>
             </div>
             
             <div className="mt-[140px] ml-[22px]">
             <Heading text='Robert Anyino' className='text-[24px] text-listcolor font-bold'/>
             <Paragraph text='Marketing Management Remmi' className= 'text-[18px] mt-[15px]   font-semibold'/>
             
             </div>
             
            
             </Flex>
             <Paragraph text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration . ' className= 'mt-[22px] pr-[1100px]'/>
             
             {/* ======= */}
             <Flex>
             <div className="mt-[130px]">
             <Image src={Like}/>
             </div>
             
             <div className="mt-[140px] ml-[22px]">
             <Heading text='Mehmet Parblo' className='text-[24px] text-listcolor font-bold'/>
             <Paragraph text='Marketing Management Remmi' className= 'text-[18px] mt-[15px]   font-semibold'/>
             
             </div>
             
            
             </Flex>
             <Paragraph text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration . ' className= 'mt-[22px] pr-[1100px]'/>
             
        </Container>
    </nav>
  )
}

export default Card