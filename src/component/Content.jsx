import React from 'react'
import Container from './Container'
// import Flex from './Flex'
import Image from './Image'
 import People from './Image/i1.png'
import Heading from './Heading'
import Paragraph from './Paragraph'
const Content = () => {
  return (
    <nav>
        <Container>
           
                <Image src={People}/>
                <Heading/>
                <Paragraph/>
        </Container>
    </nav>
  )
}
 
export default Content