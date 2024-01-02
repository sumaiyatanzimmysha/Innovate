import Container from "./component/Container"
import Image from "./component/Image"
import List from "./component/List"
  import Logo from "../src/assets/logo.png"
import Flex from "./component/Flex"
 
import { FaAngleDown } from "react-icons/fa";
import Button from "./component/Button"
import Heading from "./component/Heading"
import Paragraph from "./component/Paragraph"
import Banner from "./component/Banner"
import People from "../src/assets/i1.png"
import Bulb from "../src/assets/i2.png"
import Money from "../src/assets/i3.png"
import Blank from "../src/assets/blank.png"
import Card1 from "../src/assets/c1.png" 
import Card3 from "../src/assets/c3.png" 
import Card from "./component/Card"
import Footer from "./component/Footer"
 
function App() {
   

  return (
    <>
     <nav className='py-8 bg-bgcolor   '>
    <Container>
 <Flex>
    <div className="w-[103px]">
        <Image src={Logo}/>
    </div>
    <div className="w-[616px]">
    <ul>
    <Flex className="justify-center gap-x-5 py-[20px] ">
    <List text= "Home" className="text-hovercolor  "/><FaAngleDown />
   
      <List text= "About " className=' '/> <FaAngleDown />
      <List text= "Service" className=''/> <FaAngleDown />
      <List text= "Portfolio" className=' '/><FaAngleDown />
      <List text= "Price" className=''/> <FaAngleDown />
      <List text= "Blog"/><FaAngleDown />
      </Flex>
    
    </ul>
    </div>
    <div className="w-[265px]    ">
      <Button text= 'Contact Us' />
    </div>
 </Flex>
    </Container>
   </nav>

   <Heading text=' We build E-commerce solution your business' className='mt-[345px] pr-[600px] text-[64px]'/>
   <Paragraph text= 'Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. ' className='mt-[24px] pr-[900px]'/>
   
   <Flex>
     <div className="justify-conent-center">
     <Button text= 'Contact Us' className='mt-[50px] px-[40px] mr-[24px]  '/>
   <Button text= 'Learn More' className= 'font-bold bg-but2color'/>
     </div>
   
     
   </Flex>
   <Banner text= 'We help you to go online and increase your sales ' className='mt-[265px] pr-[600px] text-[56px]'/>
   <Flex>
  <div className="">
  <Image src={People} className='mt-[64px] '/>
  <Heading text= 'eCommerce Consulting' className='text-[30px] font-bold text-listcolor font-open mt-[28px]'/>
             <Paragraph text='Better eCommerce businesses by creating joyful digital ideas and experiences that connect the  hearts of their consumers.' className= 'text-[18px] text-regular pr-[100px] text-pcolor font-pap'/>
             </div>

             <div className="px-[64px]">
  <Image src={Bulb} className='mt-[64px] '/>
  <Heading text= 'eCommerce Consulting' className='text-[30px] font-bold text-listcolor font-open mt-[28px]'/>
             <Paragraph text='Better eCommerce businesses by creating joyful digital ideas and experiences that connect the  hearts of their consumers.' className= 'text-[18px] text-regular pr-[64px] text-pcolor font-pap'/>
             </div>

             <div className="">
  <Image src={Money} className='mt-[64px] '/>
  <Heading text= 'eCommerce Consulting' className='text-[30px] font-bold text-listcolor font-open mt-[28px]'/>
             <Paragraph text='Better eCommerce businesses by creating joyful digital ideas and experiences that connect the  hearts of their consumers.' className= 'text-[18px] text-regular pr-[64px] text-pcolor font-pap'/>
             </div>
             
             </Flex>

<Flex>
  <div className="">
<Image src={Blank} className= 'mt-[180px] w-[539px] h-[580px]'/>
</div>
<div className="mt-[220px] ml-[100px] ">
<Heading text= 'What We Do?' className= '  text-[56px] font-open text-listcolor font-bold'/>
<Paragraph text= 'We are an award-winning digital creative studio from London, in the business of creating unforgettable interactive experiences.' className= 'mt-[20px] pr-[600px] text-[18px] text-regular text-pcolor font-pap'/>
<Heading text=' Understand whole customer story' className='text-[24px] font-semibold mt-[10px]'/>
<Paragraph text='Hub gives you incomparable insight into what your customers are perusing, clicking, and craving.' className= 'font-pap text-[18px] mt-[20px] pr-[450px]'/>
<Heading text=' Build trust and loyalty programs' className='text-[24px] font-semibold mt-[36px]'/>
<Heading text=' Analyze and optimize with data' className='text-[24px] font-semibold mt-[36px]'/>
</div>
             
</Flex>

 
<Flex>
     
<Image src={Card1} className='mt-[270px] w-[400px] h-[250px]'/>
<div className="pl-[60px]">
<Heading text= '01' className= 'text-[64px]  mt-[300px] text-pcolor'/>
<Heading text= 'Make your business visible online' className= 'text-[24px]   mt-[20px]'/>
<Paragraph text='Open an online store and become an international seller. Your customers will enjoy shopping online!' className='mt-[10px] text-pcolor font-regular text-[18px] pr-[400px] font-robo'/>
</div>
 
 </Flex>

 <Flex>
 <div className="mt-[58px]">
<Heading text= '02' className= 'text-[64px]  mt-[32px] text-pcolor'/>
<Heading text= 'Make your eCommerce business stand out' className= 'text-[24px]     mt-[20px]'/>
<Paragraph text='We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion, pride and plenty of elbow grease into everything we do.' className='mt-[10px] text-pcolor font-regular text-[18px] pr-[950px]'/>
</div>



 </Flex>


 <Flex className=''>
     
     <Image src={Card3} className='mt-[22px] w-[400px] h-[300px]'/>
     <div className="pl-[60px]  ">
     <Heading text= '03' className= 'text-[64px]     text-pcolor'/>
     <Heading text= 'Grow with your audience' className= 'text-[24px]   mt-[20px]'/>
     <Paragraph text='We marry creative insight with data to deliver successful user experiences. Through a process of iteration and prototyping, we design interfaces that bring joy to people.' className='mt-[10px] text-pcolor font-regular text-[18px] pr-[500px] font-pap'/>
     </div>
      
      </Flex>
      <Card/>
       
<Footer/>
             
    </>
  )
}

export default App
