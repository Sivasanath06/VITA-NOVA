import React from "react";
import { Box, Button, Typography } from "@mui/material";
import image from "./calci.jpg";
import { useNavigate } from "react-router-dom";

function Calculator() {
  const navigate = useNavigate();
  const goToResult = () => {
    navigate("/calciresult");
  };
  return (
    <>
      <Typography
        color="black"
        width="100%"
        //   height="auto"
        fontWeight="300"
        variant="h4"
        position="relative"
        top="100px"
        left="350px"

        //   marginTop="50px"
      >
        Calculate your E-Waste present in your home.
      </Typography>

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
      <Button
        size="large"
        sx={{
          fontWeight: "bold",
          top: "90px",
          left: "550px",
          border: "5px solid #4ecc75",
          borderRadius: "20px",
          color: "black",
        }}
        onClick={() => goToResult()}
      >
        CALCULATE.
      </Button>
    </>
  );
}

export default Calculator;
