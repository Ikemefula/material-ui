import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite example in TypeScript
        </Typography>
        <ProTip />

        <Button variant="contained" color="primary">
          I am a Material UI Button
        </Button>
        <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
          I am a Material UI Button
        </Button>

        <Fab color="tertiary" aria-label="add" sx={{ ml: 2 }}>
          +
        </Fab>

        <Copyright />
      </Box>
    </Container>
  );
}
