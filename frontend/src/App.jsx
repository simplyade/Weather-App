import React from 'react';
import { Container, Grid } from '@mui/material';
import Weather from './components/Weather';
import Cities from './components/Cities';

function App() {
  return (
   
    <Container maxWidth="lg">
  
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* Optional Header Section */}
          <div><h1 style={{ color: 'green', paddingLeft: '10px',paddingRight: '10px',paddingTop:'10px'}}>Weather Report</h1></div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Weather />
        </Grid>
        <Grid item xs={12} md={6}>
          <Cities />
        </Grid>
        <Grid item xs={12}>
          {/* Optional Footer Section */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;