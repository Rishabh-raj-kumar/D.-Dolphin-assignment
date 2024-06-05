import React from 'react'
import { Box } from '@mui/material'
function Grown() {
  return (
    <Box className="bride" margin={"4rem"} padding={"3rem"} display={"flex"} gap={1}>
        <Box sx={{ width : "50%", padding:"2rem"}}>
            <Box display={"flex"} flexDirection={"column"} gap={2}>
                <img style={{ width : "80%"}} src='/assets/pic6.png'/>
                <p style={{ color : "white", marginTop : "3rem"}}>DDolphine is all about designing and manufacturing beautiful gowns to your specific requirements and measurements. You can also call it - fashionable made-to-measure clothes</p>
            </Box>
        </Box>
        <Box sx={{ width : "50%", padding:"2rem"}}>
            <Box display={"flex"} alignItems={"flex-end"} flexDirection={"column"} gap={2}>
                <p style={{ color : "white", marginBottom : "3rem"}}>DDolphine is all about designing and manufacturing beautiful gowns to your specific requirements and measurements. You can also call it - fashionable made-to-measure clothes</p>
                <img style={{ width : "80%"}} src='/assets/pic7.png'/>
            </Box>
        </Box>
    </Box>
  )
}

export default Grown