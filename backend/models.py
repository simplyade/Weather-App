import requests

def get_weather_by_location(lat: float, lon: float):
    api_key = "c5a8c3487cf8d249a299d5349d9017da"
    url = f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}&units=metric"
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        print(f"Error fetching weather data: {e}")
        return None

def get_weather_for_cities(cities: str):
    api_key = "c5a8c3487cf8d249a299d5349d9017da"
    cities = [city.strip() for city in cities.split(",")]
    weather_data = []
    for city in cities:
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
        try:
            response = requests.get(url)
            response.raise_for_status()
            weather_data.append(response.json())
        except requests.RequestException as e:
            print(f"Error fetching weather data for {city}: {e}")
            weather_data.append(None)
    return weather_data