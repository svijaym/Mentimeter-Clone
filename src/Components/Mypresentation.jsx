import { Button, Heading } from '@chakra-ui/react';
import React from 'react'
import Navbaar from './Navbaar';


const Mypresentation = () => {
  return (
    <div>
        <Navbaar/>
        <div style={{display:'flex',width:"100%",margin:"auto"}}>
            <div style={{width:"20%",margin:"auto", textAlign:"left",marginTop:"-1px"}}>
                <Button>My presentations</Button>
                <Button>Templates</Button>
                <Button>Branding & Colours</Button>
            </div>
            <div style={{width:"80%", textAlign:"center",marginLeft:"400px",marginTop:"250px"}}>
                {/* https://static.mentimeter.com/static/motion/noPresentations.h264.mp4 */}
                {/* style={{width:'50%',margin:'auto'}} */}
                <div style={{textAlign:"right"}}>
                  <iframe src="https://static.mentimeter.com/static/motion/noPresentations.h264.mp4" width="300" height="200" 
                        frameborder="0" title="mentivideo" allow="fullscreen" allowfullscreen></iframe>
                </div>
                <Heading>No presentations here yet!</Heading>
                <p>Start creating interactive and engaging presentations to include your audience.</p>
                <div style={{display:'flex', textAlign:"right"}}>
                    <Button colorScheme='blue' borderRadius="none">+ New presentation</Button>
                    <Button colorScheme='gray' borderRadius="none">Sample presentation builder</Button>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Mypresentation;