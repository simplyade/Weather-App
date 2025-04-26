import React, { useState } from 'react';
import axios from 'axios';
import { Grid, TextField, Button, Snackbar } from '@mui/material';
import CityWeather from './CityWeather';
import MuiAlert from '@mui/material/Alert';

function Cities() {
  const [inputValue, setInputValue] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleGetWeather = async () => {
    try {
      if (inputValue.trim().length === 0) {
        setSnackbarMessage('Please enter a city name or location coordinates');
        setOpenSnackbar(true);
      } else {
        if (inputValue.includes('°')) {
          // Handle location coordinates
          const latMatch = inputValue.match(/(\d+(?:\.\d+)?)(°)(N|S)/);
          const lonMatch = inputValue.match(/(\d+(?:\.\d+)?)(°)(E|W)/);

          if (latMatch && lonMatch) {
            const lat = parseFloat(latMatch[1]) * (latMatch[3] === 'N' ? 1 : -1);
            const lon = parseFloat(lonMatch[1]) * (lonMatch[3] === 'E' ? 1 : -1);

            const response = await axios.get(`http://localhost:8000/weather/location/?lat=${lat}&lon=${lon}`);
            setWeatherData([response.data]);
          } else {
            setSnackbarMessage('Invalid coordinates format');
            setOpenSnackbar(true);
          }
        } else {
          // Handle city names
          const response = await axios.get(`http://localhost:8000/weather/cities/?cities=${inputValue}`);
          setWeatherData(response.data);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Enter cities (comma-separated) or location coordinates (e.g. 37.7749°N 122.4194°W)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleGetWeather}>
          Get Weather
        </Button>
      </Grid>
      <Grid item xs={12}>
        {weatherData.map((cityWeather, index) => (
          <CityWeather key={index} cityWeather={cityWeather} />
        ))}
      </Grid>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert elevation={6} variant="filled" severity="error">
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Grid>
  );
}

export default Cities;