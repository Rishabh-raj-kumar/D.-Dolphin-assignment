import React from 'react'
import { Box } from '@mui/material'
import { Button } from '@mui/material'

function About() {
  return (
    <Box sx={{
        width : "100vw",
        padding : "20px",
        marginY : "2rem"
    }}>
        <Box display={"flex"} gap={3}>
            <Box className="about--page" sx={{
                width : "50vw",
                color : "white"
            }} display={"flex"} flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"}>
                <h1 style={{ fontSize : "3rem"}}>ABOUT US</h1>
                <p style={{ width : "60%", wordSpacing : "2px",lineHeight : "20px", textAlign : "center"}}>Our Company is a new venture that has been created for the Global Audience .Our focus is to provide Customized wear, apparel and accessories and position ourselves as the top fashion Venture serving global market. Our intensions are to obtain market shares and become a central hub of shopping activity for all Indians as well as Global Audience ,who enjoy wearing fashionable apparel.We believe that this is critical to our initial success and long-term growth.</p>
                <Button variant="outlined" sx={{
                    color : "white",
                    border : "2px solid white"
                }}>More Info</Button>
            </Box>
            <Box sx={{
                width : "50vw"
            }}>
                <img style={{ width : "90%"}} src='/assets/pic2.png'/>
            </Box>
        </Box>
    </Box>
  )
}

export default About