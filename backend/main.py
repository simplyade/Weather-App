from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import get_weather_by_location, get_weather_for_cities
import logging

app = FastAPI()

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

origins = [
    "http://localhost:5173",  # Vite development server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

@app.get("/weather/location/")
async def get_weather_by_location_endpoint(lat: float, lon: float):
    try:
        return get_weather_by_location(lat, lon)
    except Exception as e:
        logger.error(f"Error fetching weather data: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

@app.get("/weather/cities/")
async def get_weather_for_cities_endpoint(cities: str):
    try:
        return get_weather_for_cities(cities)
    except Exception as e:
        logger.error(f"Error fetching weather data: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")