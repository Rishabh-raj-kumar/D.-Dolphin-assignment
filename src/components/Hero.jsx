import { Box } from '@mui/material'
import React from 'react'

function Hero() {
  return (
    <Box sx={{
        width : '100vw',
        minHeight : '100vh'
    }}>
        <img style={{ width : '100%'}} src='/assets/pic1.png'/>
        <Box sx={{
            display : 'flex',
            width : '100%',
            justifyContent : 'center'
        }}>
          <div className='collection' style={{ textAlign : 'center', color : 'white'}}>
            <h1>OUR LATEST COLLECTION</h1>
            <p>Elevate Your Style with our Exiquite Design</p>
          </div>
        </Box>
    </Box>
  )
}

export default Hero