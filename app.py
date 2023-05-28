from flask import Flask, render_template
import requests
import json

app = Flask(__name__)

@app.route('/')
def index():
    temperature_chart_url = generate_gauge_chart_url("Temperature", 0, 60, 70)
    humidity_chart_url = generate_gauge_chart_url("Humidity", 0, 100, 45)
    pressure_chart_url = generate_gauge_chart_url("Pressure", 900, 1100, 1000)
    dew_chart_url = generate_gauge_chart_url("Dew Point", 900, 1100, 1000)
    wet_chart_url = generate_gauge_chart_url("Wet Bulb", 900, 1100, 1000)
    heat_chart_url = generate_gauge_chart_url("Heat Index", 900, 1100, 1000)
    
    return render_template('index.html', temperature_chart_url=temperature_chart_url, humidity_chart_url=humidity_chart_url, pressure_chart_url=pressure_chart_url, dew_chart_url=dew_chart_url, wet_chart_url=wet_chart_url, heat_chart_url=heat_chart_url)

@app.route('/weather-data', methods=['GET'])
def get_weather_data():
    url = 'http://172.16.12.46/v1/current_conditions'
    response = requests.get(url)
    weather_data = response.json()

    # Convert the JSON data to a formatted text string
    formatted_weather_data = json.dumps(weather_data, indent=2)

    # Return the data as plain text
    return formatted_weather_data

def generate_gauge_chart_url(label, min_value, max_value, current_value):
    # Build the chart URL using the provided values
    chart_url = f"https://chart.googleapis.com/chart?cht=gauge&chds={min_value},{max_value}&chd=t:{current_value}&chs=250x100&chl={label}"

    return chart_url

    return chart_url

if __name__ == '__main__':
    app.run(debug=True)