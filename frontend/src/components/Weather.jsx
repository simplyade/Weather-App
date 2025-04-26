
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography } from '@mui/material';

function Weather() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
      axios.get(`http://localhost:8000/weather/location/?lat=${location.lat}&lon=${location.lon}`)
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [location]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h4">Weather in {weather.name}</Typography>
            <Typography variant="h6">Temperature: {weather.main?.temp}°C</Typography>
            <Typography variant="h6">Description: {weather.weather?.[0].description}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Weather;