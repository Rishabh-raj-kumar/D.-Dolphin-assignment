import { Box, Button } from '@mui/material'
import React from 'react'

function Events() {
  return (
    <Box>
        <Box sx={{
            margin : "5rem"
        }}>
            <h1 style={{
                color : "white",
                textAlign : "center"
            }}>ONGOING EVENTS</h1>
        </Box>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <img style={{
                width : "90%"
            }} src='/assets/pic4.png'/>
        </Box>
        <Box display={"flex"}  flexDirection={"column"} alignItems={"center"} justifyContent={"center"} sx={{ textAlign : "center",color : "white", padding : "2rem",}}>
        <p style={{ width : "70%"}}>D.Dolphin is dedicated to fostering women's empowerment through our annual beauty pageant events. As part of our commitment to celebrating women from all walks of life, we are thrilled to announce the upcoming Miss and Mrs D Dolphin Universe beauty pageant in Goa. Prior to the event, we will host online grooming sessions led by renowned international experts, each a former beauty queen in their respective countries. We believe in providing a platform for every woman, regardless of marital status, to shine and represent our values of inclusivity and empowerment</p>
        </Box>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <img style={{
                width : "100%",
                marginRight : "1rem"
            }} src='/assets/middle_gallery.jpg'/>
        </Box>
    </Box>
  )
}

export default Events