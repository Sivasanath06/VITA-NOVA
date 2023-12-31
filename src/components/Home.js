import { Box, Button, Typography } from "@mui/material";
import React from "react";
import image from "./Untitled123.jpg";
import image1 from "./number.jpg"

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 600,
          backgroundColor: "#355E3B",
          "&:hover": {
            backgroundColor: "primary.success",
            // opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Box
          component="img"
          className="image_home"
          alt="The house from the offer."
          src="https://media.istockphoto.com/id/1404178530/photo/waste-bin-full-of-e-waste.webp?b=1&s=170667a&w=0&k=20&c=W8v4lnkh3VxwtW80vDV0XaJa_VoQSwY4a3xze8loITQ="
        />
        <Typography
          color="white"
          width="500px"
          fontWeight="300"
          variant="h4"
          position="relative"
          bottom="230px"
          left="750px"
        >
          Unlock precious resources in your home
        </Typography>
        <span />
        <Typography
          color="#d5f5df"
          width="500px"
          variant="h6"
          position="relative"
          bottom="200px"
          left="750px"
        >
          VITA NOVA (VN) is one of the fastest-growing waste streams and a major
          threat to the environment and to human health. But there’s something
          you can do about it!
        </Typography>
        <Button
          size="large"
          sx={{
            fontWeight: "bold",
            bottom: "150px",
            left: "750px",
            border: "5px solid #4ecc75",
            borderRadius: "20px",
            color: "white",
          }}
        >
          Learn More
        </Button>
      </Box>
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
        <img src={image} className="image_home1" />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 300,
          backgroundColor: "#0000",
          position: "relative",
          top: "15px",
          "&:hover": {
            backgroundColor: "primary.success",
            // opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Typography
          color="black"
          width="1250px"
          variant="h4"
          position="relative"
          bottom="110px"
          left="10px"
          textAlign="center"
        >
          TO FIND THE NEAREST E-WASTE DISPOSAL CENTERES <br/>
                          CLICK BELOW 

        </Typography>
        <Button
          size="large"
          sx={{
            fontWeight: "bold",
            bottom: "90px",
            left: "550px",
            border: "5px solid #4ecc75",
            borderRadius: "20px",
            color: "black",
          }}
        >
          <Link to="/locate">
          Click Here.
          </Link>
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 600,
          backgroundColor: "#355E3B",
          "&:hover": {
            backgroundColor: "primary.success",
            // opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <img
          src={image1}
          className="image_home5"
        />
        <img
          src="https://home.sophos.com/sites/default/files/2021-09/Recycling-computers.png"
          className="image_home2"
        />
        <img
          src="https://info.mayeralloys.com/hubfs/e-waste-3.jpg"
          className="image_home3"
        />

        <Typography
          color="#d4ffdf"
          width="550px"
          variant="h6"
          position="relative"
          top="70px"
          left="410px"
        >
          kg appliances already identified as unwanted or as e-waste in our
          homes!
        </Typography>
        <Typography
          color="#9afcb4"
          width="1250px"
          variant="h6"
          position="relative"
          top="120px"
          left="10px"
        >
          This counter will quantify the weight of all the old electronics
          people find in their homes. The more people find unwanted gadgets in
          their homes, the more the number above will climb! This shows us the
          quantity of e-waste in kg that there is available in homes and is just
          waiting to be either recycled and /or reused.
        </Typography>
      </Box>
     
    </>
  );
}

export default Home;
