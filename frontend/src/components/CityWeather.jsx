import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function CityWeather({ cityWeather }) {
  if (!cityWeather) return null;

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">Weather in {cityWeather.name}</Typography>
        <Typography variant="body1">Temperature: {cityWeather.main.temp}°C</Typography>
        <Typography variant="body1">Description: {cityWeather.weather[0].description}</Typography>
      </CardContent>
    </Card>
  );
}

export default CityWeather;