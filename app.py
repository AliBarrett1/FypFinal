import csv
from flask import Flask, render_template, redirect, url_for
import requests
import json
import datetime

app = Flask(__name__)

# Create an empty list to store historical weather data
historical_data = []

@app.route('/')
def index():
    temperature_chart_url = generate_gauge_chart_url("Temperature", 0, 60, 70)
    humidity_chart_url = generate_gauge_chart_url("Humidity", 0, 100, 45)
    dew_chart_url = generate_gauge_chart_url("Dew Point", 900, 1100, 1000)
    wet_chart_url = generate_gauge_chart_url("Wet Bulb", 900, 1100, 1000)
    heat_chart_url = generate_gauge_chart_url("Heat Index", 900, 1100, 1000)
    wind_chart_url = generate_gauge_chart_url("Wind Chill", 900, 1100, 1000)
    thw_chart_url = generate_gauge_chart_url("THW Index", 900, 1100, 1000)
    windspeedlast_chart_url = generate_gauge_chart_url("Wind Speed Last", 0, 100, 45)
    return render_template('index.html', temperature_chart_url=temperature_chart_url, humidity_chart_url=humidity_chart_url, dew_chart_url=dew_chart_url, wet_chart_url=wet_chart_url, heat_chart_url=heat_chart_url,  wind_chart_url=wind_chart_url, thw_chart_url=thw_chart_url, windspeedlast_chart_url=windspeedlast_chart_url)

@app.route('/weather-data', methods=['GET'])
def get_weather_data():
    url = 'http://172.16.12.46/v1/current_conditions'
    response = requests.get(url)
    weather_data = response.json()
    
    # Get the current time
    current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Store the weather data and current time in the historical_data list
    historical_data.append((current_time, weather_data))

    # Convert the JSON data to a formatted text string
    formatted_weather_data = json.dumps(weather_data, indent=2)

    # Return the data as plain text
    return formatted_weather_data




@app.route('/historical')
def historical():
    # Render the historical.html template and pass the historical_data list
    return render_template('historical.html', data=historical_data)

def generate_gauge_chart_url(label, min_value, max_value, current_value):
    # Build the chart URL using the provided values
    chart_url = f"https://chart.googleapis.com/chart?cht=gauge&chds={min_value},{max_value}&chd=t:{current_value}&chs=250x100&chl={label}"

    return chart_url

    
if __name__ == '__main__':
    app.run(debug=True)


@app.route('/battery-status', methods=['GET'])
def get_battery_status():
    url = 'http://172.16.12.46/v1/current_conditions'
    response = requests.get(url)
    weather_data = response.json()
    
    battery_status = weather_data['data']['trans_battery_flag']
    status_text = ''
    
    if battery_status == 0:
        status_text = 'Full'
    elif battery_status == 1:
        status_text = 'Half'
    elif battery_status == 2:
        status_text = 'Empty'
    
    return status_text




import requests
import csv
import datetime

# ...

def update_csv_file():
    # Fetch weather data from the first API endpoint
    url = 'http://172.16.12.46/v1/current_conditions'
    response = requests.get(url)
    weather_data = response.json()

    # Extract the required data from the weather_data JSON
    inside_temp = weather_data['data']['temp']
    inside_humidity = weather_data['data']['hum']
    dew_point = weather_data['data']['dew_point']
    wet_bulb = weather_data['data']['wet_bulb']
    thw_index = weather_data['data']['thw_index']
    heat_index = weather_data['data']['heat_index']

    # Fetch weather data from the second API endpoint
    url2 = 'https://api.openweathermap.org/data/2.5/weather?lat=2.977007&lon=101.733376&appid=2917ab3f70f94f881d8a1b5dff4039d6'
    response2 = requests.get(url2)
    weather_data2 = response2.json()

    # Extract the required data from the weather_data2 JSON
    temperature = weather_data2['main']['temp']
    pressure = weather_data2['main']['pressure']

    # Get the current timestamp
    timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    # Display the data
    print("Timestamp:", timestamp)
    print("Inside Temperature:", inside_temp)
    print("Inside Humidity:", inside_humidity)
    print("Dew Point:", dew_point)
    print("Wet Bulb:", wet_bulb)
    print("THW Index:", thw_index)
    print("Heat Index:", heat_index)
    print("Temperature:", temperature)
    print("Pressure:", pressure)

    # Append the data to the CSV file
    with open('weather_data.csv', 'a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([timestamp, inside_temp, inside_humidity, dew_point, wet_bulb, thw_index, heat_index, temperature, pressure])

# ...


