import React from 'react'
import { Box } from "@mui/material";
import image from "./result.jpg";

function Calciresult() {
  return (
    <Box
    sx={{
      position: "relative",
      top: "15px",
      width: 1200,
      height: 600,
      backgroundColor: "#0000",
      "&:hover": {
        backgroundColor: "primary.success",
        // opacity: [0.9, 0.8, 0.7],
      },
    }}
  >
    <img src={image} className="image_home4" />
  </Box>
  )
}

export default Calciresult