☀️ Weather App

A simple weather app built with React and Material-UI, fetching weather data from a FastAPI backend.

Features
- Displays current weather for user's location
- Allows users to search for weather in multiple cities
- Responsive design for mobile and desktop devices

API Documentation
Get Weather by Location
- Endpoint: /weather/location/
- Method: GET
- Parameters:
    - lat: Latitude of the location (-90 to 90)
    - lon: Longitude of the location (-180 to 180)
- Example: GET /weather/location/?lat=37.7749&lon=-122.4194

Get Weather for Cities
- Endpoint: /weather/cities/
- Method: GET
- Parameters:
    - cities: Comma-separated list of city names
- Example: GET /weather/cities/?cities=New York,Los Angeles,Chicago

Technologies Used
- Frontend: React, Material-UI
- Backend: FastAPI

Prerequisites
- Node.js (for React development)
- Python (for FastAPI backend)

Getting Started
1. Clone the repository: git clone https://github.com/your-username/weather-app.git
2. Install dependencies:
    - Frontend: npm install or yarn install
    - Backend: pip install -r requirements.txt
3. Start the backend server: uvicorn main:app --host 0.0.0.0 --port 8000
4. Start the frontend development server: npm run dev 

Contributing
Contributions are welcome! Please submit a pull request with your changes.

License
This project is licensed under the MIT License. See LICENSE for details.

Screenshots
![Screenshot Description](http:127.0.0.1:8000/backend/Screenshot/Weather_App_Screenshot.png)



