import React from "react";
import { CatchingPokemonRounded } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";


function Header() {
  return (
    <AppBar style={{ background: '#FFFF' }} >

      <Toolbar>
        <IconButton size="large" edge="start" color="success" aria-label="logo">
          <CatchingPokemonRounded />
        </IconButton>
        <Typography variant="h6"  sx={{ flexGrow: 1 }}  color="common.black">
          VITA NOVAx   
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button size="large" sx={{ fontWeight: 'bold' }}  color="success" >Leaderboard</Button>
          <Button size="large" sx={{ fontWeight: 'bold' }} color="success">Calculator</Button>
          <Button size="large" sx={{ fontWeight: 'bold' }} color="success">About</Button>
          <Button size="large" sx={{ fontWeight: 'bold' }} color="success">Login</Button>
          <Button size="large" sx={{ fontWeight: 'bold' }} color="success">Sign Up</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
