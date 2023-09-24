import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: 1280,
          height: 300,
          backgroundColor: "#152e04",
          "&:hover": {
            backgroundColor: "primary.success",
            // opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Container>
          <Grid container spcing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h4" sx={{ color: "white", margin: "15px" }}>
                Product
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Computer
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                CPU
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Earphone
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Programming
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Javascript
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h4" sx={{ color: "white", margin: "15px" }}>
                Service
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Computer
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                CPU
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Earphone
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Programming
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Javascript
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h4" sx={{ color: "white", margin: "15px" }}>
                About US
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Computer
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                CPU
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Earphone
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Programming
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Javascript
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h4" sx={{ color: "white", margin: "15px" }}>
                Social Media
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Computer
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                CPU
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Earphone
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Programming
              </Typography>
              <Typography variant="h6" sx={{ color: "white", margin: "15px" }}>
                {" "}
                Javascript
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
