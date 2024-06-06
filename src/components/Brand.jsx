import React from "react";
import { Box } from "@mui/material";
function Brand() {
  return (
    <>
    <Box minHeight={"100vh"}>
      <Box
        display={"flex"}
        alignContent={"space-between"}
        gap={2}
        marginBlock={"1rem"}
        padding={"5rem"}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
          }}
        >
          <h1 style={{ fontSize: "3rem" }}>A BIGGER SPLASH</h1>
          <h1 style={{ fontSize: "3rem" }}>EXCLUSIVE BRAND</h1>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ position: "relative",left : "15%" }}>
            <img
              style={{
                width: "50%",
                position: "absolute",
                top: 0,
                left: 0,
                display: "block",
                zIndex: "99",
              }}
              src="/assets/pic11.png"
            />
            <img
              style={{ width: "50%", translate: "100px 200px" }}
              src="/assets/pic8.png"
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          minWidth : "100vw",
          minHeight : "100vh",
          display: "flex",
          alignItems : "center",
          marginLeft  : "5rem"
        }}
      >
        <Box sx={{ minWidth : "100vw", position: "relative", minHeight : "100vh" }}>
        <img
              className=" absolute top-0 left-0 block  w-96 h-3/5"
              src="/assets/pic10.png"
            />
            <img
              className=" absolute top-20 left-20 block w-96 h-3/5"
              src="/assets/pic15.png"
            />
        </Box>
      </Box>
      <Box>
        <img style={{ width : "100%"}} src="/assets/pic17.png"/>
      </Box>
      </Box>
    </>
  );
}

export default Brand;
