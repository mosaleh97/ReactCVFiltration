// src/App.js
import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import FileUpload from './components/FileUpload';
import Logo from './assets/raya-it-logo.jpg'; // Ensure the path to the logo is correct

function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} sx={{ width: '100%' }}>
          <FileUpload />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ width: '100%' }}>
          <Box sx={{ textAlign: 'center' }}>
            <img src={Logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
