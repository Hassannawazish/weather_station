import requests
import json

# Define the JSON data to be sent
data = {
    "temperature": 23,
    "humidity": 62,
    "wind_speed": 12,
    "detail": {
            "winddirection": "north",
            "pressure": "1014.1",
            "weather_type": "sunny"
        }
}

# Define the URL where the endpoint is located
url = 'http://172.17.0.3:5050/weather_data'

# Send an HTTP POST request with JSON data
response = requests.post(url, json=data)

# Print the response
print(response.json())
