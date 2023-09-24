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
import { Link } from "react-router-dom";


function Header() {
  return (
    <AppBar style={{ background: '#FFFF' }} >

      <Toolbar>
        <IconButton size="large" edge="start" color="success" aria-label="logo">
          <CatchingPokemonRounded />
        </IconButton>
        <Typography variant="h6"  sx={{ flexGrow: 1 }}  color="common.black"><Link to="/">
          VITA NOVA   
        </Link>
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button size="large" sx={{ fontWeight: 'bold' }}  color="success"><Link to="/leaderboard"> Leaderboard</Link></Button>
          <Button size="large" sx={{ fontWeight: 'bold' }} color="success"><Link to="/calci">Calculator</Link></Button>
          <Button size="large" sx={{ fontWeight: 'bold' }} color="success">About</Button>
          <Button size="large" sx={{ fontWeight: 'bold' }} color="success">Login</Button>
          <Button size="large" sx={{ fontWeight: 'bold' }} color="success">Sign Up</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
