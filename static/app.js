function updateWeatherData() {
    fetch('/weather-data')
        .then(response => response.json())
        .then(data => {
            // Temperature
            if (
                data &&
                data.data &&
                data.data.conditions &&
                Array.isArray(data.data.conditions) &&
                data.data.conditions.length > 0 &&
                data.data.conditions[0].hasOwnProperty('temp')
            ) {
                const temperature = data.data.conditions[0].temp;
                const temperatureCelsius = (temperature - 32) * (5 / 9);
                console.log('Temperature:', temperatureCelsius);
                document.getElementById('temperature').innerHTML = temperatureCelsius.toFixed(1) + '&deg;C';

                // Update the gauge chart based on the temperature
                var temperatureGaugeData = google.visualization.arrayToDataTable([
                    ['Label', 'Value'],
                    ['Temperature', temperatureCelsius]
                ]);

                var temperatureGaugeOptions = {
                    width: 400,
                    height: 120,
                    redFrom: 50,
                    redTo: 60,
                    yellowFrom: 40,
                    yellowTo: 50,
                    minorTicks: 5,
                    min: 0,
                    max: 60
                    , greenColor: '#00FF00'
                };

                var temperatureGaugeChart = new google.visualization.Gauge(document.getElementById('temperature_gauge'));
                temperatureGaugeChart.draw(temperatureGaugeData, temperatureGaugeOptions);
            }

            // Humidity
            if (
                data &&
                data.data &&
                data.data.conditions &&
                Array.isArray(data.data.conditions) &&
                data.data.conditions.length > 0 &&
                data.data.conditions[0].hasOwnProperty('hum')
            ) {
                const humidity = data.data.conditions[0].hum;
                console.log('Humidity:', humidity);
                document.getElementById('humidity').textContent = humidity;

                // Update the gauge chart based on the humidity
                var humidityGaugeData = google.visualization.arrayToDataTable([
                    ['Label', 'Value'],
                    ['Humidity', humidity]
                ]);

                var humidityGaugeOptions = {
                    width: 400,
                    height: 120,
                    redFrom: 50,
                    redTo: 60,
                    yellowFrom: 40,
                    yellowTo: 50,
                    minorTicks: 5,
                    min: 0,
                    max: 60
                };

                var humidityGaugeChart = new google.visualization.Gauge(document.getElementById('humidity_gauge'));
                humidityGaugeChart.draw(humidityGaugeData, humidityGaugeOptions);
            }

            // Dew Point
            if (
                data &&
                data.data &&
                data.data.conditions &&
                Array.isArray(data.data.conditions) &&
                data.data.conditions.length > 0 &&
                data.data.conditions[0].hasOwnProperty('dew_point')
            ) {
                const dew = data.data.conditions[0].dew_point;
                console.log('Dew Point:', dew);
                document.getElementById('dew_point').textContent = dew;

                // Update the gauge chart based on the dew point
                var dewGaugeData = google.visualization.arrayToDataTable([
                    ['Label', 'Value'],
                    ['Dew Point', dew]
                ]);

                var dewGaugeOptions = {
                    width: 400,
                    height: 120,
                    redFrom: 50,
                    redTo: 60,
                    yellowFrom: 40,
                    yellowTo: 50,
                    minorTicks: 5,
                    min: 0,
                    max: 60
                };

                var dewGaugeChart = new google.visualization.Gauge(document.getElementById('dew_gauge'));
                dewGaugeChart.draw(dewGaugeData, dewGaugeOptions);
            }
  


            // Wet Bulb
            if (
                data &&
                data.data &&
                data.data.conditions &&
                Array.isArray(data.data.conditions) &&
                data.data.conditions.length > 0 &&
                data.data.conditions[0].hasOwnProperty('wet_bulb')
            ) {
                const wet = data.data.conditions[0].wet_bulb;
                console.log('Wet Bulb:', wet);
                document.getElementById('wet_bulb').textContent = wet;

                // Update the gauge chart based on the wet bulb
                var wetGaugeData = google.visualization.arrayToDataTable([
                    ['Label', 'Value'],
                    ['Wet Bulb', wet]
                ]);

                var wetGaugeOptions = {
                    width: 400,
                    height: 120,
                    redFrom: 50,
                    redTo: 60,
                    yellowFrom: 40,
                    yellowTo: 50,
                    minorTicks: 5,
                    min: 0,
                    max: 60
                };

                var wetGaugeChart = new google.visualization.Gauge(document.getElementById('wet_gauge'));
                wetGaugeChart.draw(wetGaugeData, wetGaugeOptions);
            }

            // Heat Index
            if (
                data &&
                data.data &&
                data.data.conditions &&
                Array.isArray(data.data.conditions) &&
                data.data.conditions.length > 0 &&
                data.data.conditions[0].hasOwnProperty('heat_index')
            ) {
                const heat = data.data.conditions[0].heat_index;
                console.log('Heat Index:', heat);
                document.getElementById('heat_index').textContent = heat;

                // Update the gauge chart based on the heat index
                var heatGaugeData = google.visualization.arrayToDataTable([
                    ['Label', 'Value'],
                    ['Heat Index', heat]
                ]);

                var heatGaugeOptions = {
                    width: 400,
                    height: 120,
                    redFrom: 50,
                    redTo: 60,
                    yellowFrom: 40,
                    yellowTo: 50,
                    minorTicks: 5,
                    min: 0,
                    max: 60
                };

                var heatGaugeChart = new google.visualization.Gauge(document.getElementById('heat_gauge'));
                heatGaugeChart.draw(heatGaugeData, heatGaugeOptions);
            }






//////// Wind CHILL
            if (
                data &&
                data.data &&
                data.data.conditions &&
                Array.isArray(data.data.conditions) &&
                data.data.conditions.length > 0 &&
                data.data.conditions[0].hasOwnProperty('wind_chill')
            ) {
                const wind = data.data.conditions[0].wind_chill;
                console.log('Wind Chill:', wind);
                document.getElementById('wind_chill').textContent = wind;

                // Update the gauge chart based on the wet bulb
                var windGaugeData = google.visualization.arrayToDataTable([
                    ['Label', 'Value'],
                    ['Wind Chill', wind]
                ]);

                var windGaugeOptions = {
                    width: 400,
                    height: 120,
                    redFrom: 50,
                    redTo: 60,
                    yellowFrom: 40,
                    yellowTo: 50,
                    minorTicks: 5,
                    min: 0,
                    max: 60
                };

                var windGaugeChart = new google.visualization.Gauge(document.getElementById('wind_gauge'));
                windGaugeChart.draw(windGaugeData, windGaugeOptions);
            }





            if (
                data &&
                data.data &&
                data.data.conditions &&
                Array.isArray(data.data.conditions) &&
                data.data.conditions.length > 0 &&
                data.data.conditions[0].hasOwnProperty('wind_speed')
            ) {
                const windspeedlast = data.data.conditions[0].wind_speed;
                console.log('Wind Speed:', windspeedlast);
                document.getElementById('wind_speed').textContent = windspeedlast;

                // Update the gauge chart based on the dew point
                var windspeedlastGaugeData = google.visualization.arrayToDataTable([
                    ['Label', 'Value'],
                    ['Wind Speed', windspeedlast]
                ]);

                var windspeedlastGaugeOptions = {
                    width: 400,
                    height: 120,
                    minorTicks: 5,
                    min: 0,
                    max: 60
                };

                var windspeedlastGaugeChart = new google.visualization.Gauge(document.getElementById('windspeed_gauge'));
                windspeedlastGaugeChart.draw(windspeedlastGaugeData, windspeedlastGaugeOptions);
            }






            if (
                data &&
                data.data &&
                data.data.conditions &&
                Array.isArray(data.data.conditions) &&
                data.data.conditions.length > 0 &&
                data.data.conditions[0].hasOwnProperty('thw_index')
            ) {
                const thw = data.data.conditions[0].thw_index;
                console.log('THW Index:', thw);
                document.getElementById('thw_index').textContent = thw;

                // Update the gauge chart based on the wet bulb
                var thwGaugeData = google.visualization.arrayToDataTable([
                    ['Label', 'Value'],
                    ['THW Index', thw]
                ]);

                var thwGaugeOptions = {
                    width: 400,
                    height: 120,
                    redFrom: 50,
                    redTo: 60,
                    yellowFrom: 40,
                    yellowTo: 50,
                    minorTicks: 5,
                    min: 0,
                    max: 60
                };

                var thwGaugeChart = new google.visualization.Gauge(document.getElementById('thw_gauge'));
                thwGaugeChart.draw(thwGaugeData, thwGaugeOptions);
            }


        })
        .catch (error => {
    console.error('Error fetching weather data:', error);
});
}

// Update the weather data when the page loads and every 60 seconds
updateWeatherData();
setInterval(updateWeatherData, 60000);







google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // assuming the gauge element has an ID of 'gauge_div'
    var gaugeElement = document.getElementById('gauge_div2');
    var textElement = document.getElementById('pressure_text');

    // create the gauge object
    var gauge = new google.visualization.Gauge(gaugeElement);

    // set the options for the gauge
    var options = {
        width: 700,
        height: 200,
        redFrom: 90,
        redTo: 100,
        minorTicks: 5,
        min: 0,
        max: 100
    };

    function updateData() {
        // create the gauge object
        var gauge = new google.visualization.Gauge(gaugeElement);

        // fetch the weather data
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=2.977007&lon=101.733376&appid=2917ab3f70f94f881d8a1b5dff4039d6')
            .then(response => response.json())
            .then(data => {
                // handle the weather data
                // update the gauge value with the pressure
                var pressure = data.main.pressure;
                var pressureInHg = pressure * 0.02953; // Convert hPa to inHg
                var gaugeData = google.visualization.arrayToDataTable([
                    ['Label', 'Value'],
                    ['Pressure', { v: pressureInHg, f: pressureInHg.toFixed(2) + ' inHg' }]
                ]);
                gauge.draw(gaugeData, options);

                // update the text element with the pressure value
                textElement.textContent = 'Pressure: ' + pressureInHg.toFixed(2) + ' inHg';
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }

    // call updateData() initially
    updateData();

    // call updateData() every 3 minutes
    setInterval(updateData, 180000);
}


////////////////////// Outside temperature gauge



google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var gaugeElement = document.getElementById('gauge_div');
    var textElement = document.getElementById('temperature_text');

    var gauge = new google.visualization.Gauge(gaugeElement);

    var options = {
        width: 400,
        height: 120,
        redFrom: 90,
        redTo: 100,
        minorTicks: 5,
        min: 0,
        max: 100
    };

    function updateData() {
        var gauge = new google.visualization.Gauge(gaugeElement);

        fetch('https://api.openweathermap.org/data/2.5/weather?lat=2.977007&lon=101.733376&appid=2917ab3f70f94f881d8a1b5dff4039d6')
            .then(response => response.json())
            .then(data => {
                var temperatureKelvin = data.main.temp;
                var temperatureCelsius = temperatureKelvin - 273.15;
                var gaugeData = google.visualization.arrayToDataTable([
                    ['Label', 'Value'],
                    ['Temperature', { v: temperatureCelsius, f: temperatureCelsius.toFixed(2) + ' °C' }]
                ]);
                gauge.draw(gaugeData, options);

                textElement.textContent = 'Temperature: ' + temperatureCelsius.toFixed(2) + ' °C';
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }

    updateData();

    setInterval(updateData, 180000);
}


///////////////THIS IS FOR THE PRESSURE CHART


// Create an array to store historical pressure values and timestamps
let pressureHistory = [];
let timestampHistory = [];

// Check if pressure history data exists in local storage
if (localStorage.getItem('pressureHistory')) {
    pressureHistory = JSON.parse(localStorage.getItem('pressureHistory'));
}

if (localStorage.getItem('timestampHistory')) {
    timestampHistory = JSON.parse(localStorage.getItem('timestampHistory'));
}

// Create the chart using Chart.js
const ctx = document.getElementById('pressureChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: timestampHistory,
        datasets: [
            {
                label: 'Pressure',
                data: pressureHistory,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    },
    options: {
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 10,
                bottom: 10,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: false,
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 1)', // White color

                },
            },
            y: {
                display: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)', // Y-axis grid color
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 1)', // White color

                },
            },
        },
    }, 
});





// Function to convert hPa to inHg
function convertHpaToInHg(hpa) {
    return hpa * 0.02953;
}

// Function to update the chart with new pressure value
function updateChart(newPressure, timestamp) {
    const pressureInHg = convertHpaToInHg(newPressure);
    pressureHistory.push(pressureInHg);
    timestampHistory.push(timestamp);

    // Limit the number of historical data points to keep
    const maxDataPoints = 8;
    if (pressureHistory.length > maxDataPoints) {
        pressureHistory = pressureHistory.slice(pressureHistory.length - maxDataPoints);
        timestampHistory = timestampHistory.slice(timestampHistory.length - maxDataPoints);
    }

    // Store the updated pressure history data in local storage
    localStorage.setItem('pressureHistory', JSON.stringify(pressureHistory));
    localStorage.setItem('timestampHistory', JSON.stringify(timestampHistory));

    chart.options.plugins.tooltip.callbacks.label = (context) => {
        const value = context.parsed.y;
        return `${value.toFixed(2)} inHg`;
    };

    // Update the chart data
    chart.data.labels = timestampHistory;
    chart.data.datasets[0].data = pressureHistory;
    chart.update();
}

// Function to fetch the pressure data from the API endpoint
// Function to fetch the pressure data from the API endpoint and update the chart
function fetchAndUpdatePressureData() {
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat=2.977007&lon=101.733376&appid=2917ab3f70f94f881d8a1b5dff4039d6'
    )
        .then((response) => response.json())
        .then((data) => {
            const pressure = data.main.pressure;
            const timestamp = new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            });
            updateChart(pressure, timestamp);
        })
        .catch((error) => {
            console.log('An error occurred while fetching the pressure data:', error);
        });
}

// Fetch the initial pressure data and start the interval
fetchAndUpdatePressureData();
setInterval(fetchAndUpdatePressureData, 30 * 60 * 1000); // Update the chart every 30 minuets




/////////////












///////////////////////////////////////////////////////////



google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var gaugeElement = document.getElementById('gauge_div');
    var textElement = document.getElementById('temperature_text');
    var gauge = new google.visualization.Gauge(gaugeElement);
    var options = {
        width: 450,
        height: 160,
        redFrom: 90,
        redTo: 100,
        minorTicks: 5,
        min: 0,
        max: 100
    };

    var gaugeElementPressure = document.getElementById('gauge_div_pressure');
    var textElementPressure = document.getElementById('pressure_text');
    var gaugePressure = new google.visualization.Gauge(gaugeElementPressure);
    var optionsPressure = {
        width: 450,
        height: 160,
        redFrom: 1000,
        redTo: 1100,
        minorTicks: 5,
        min: 900,
        max: 1100
    };

    function updateData() {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=2.977007&lon=101.733376&appid=2917ab3f70f94f881d8a1b5dff4039d6')
            .then(response => response.json())
            .then(data => {
                var temperatureKelvin = data.main.temp;
                var temperatureCelsius = temperatureKelvin - 273.15;
                var pressure = data.main.pressure;

                var temperatureGaugeData = google.visualization.arrayToDataTable([
                    ['Label', 'Value'],
                    ['Temperature', { v: temperatureCelsius, f: temperatureCelsius.toFixed(2) + ' °C' }]
                ]);
                gauge.draw(temperatureGaugeData, options);
                textElement.textContent = 'Temperature: ' + temperatureCelsius.toFixed(2) + ' °C';

                // Convert pressure from hPa to inHg
                var pressureInHg = pressure * 0.02953;

                var pressureGaugeData = google.visualization.arrayToDataTable([
                    ['Label', 'Value'],
                    ['Pressure', { v: pressureInHg, f: pressureInHg.toFixed(2) + ' inHg' }]
                ]);
                gaugePressure.draw(pressureGaugeData, optionsPressure);
                textElementPressure.textContent = pressureInHg.toFixed(2) + ' inHg';
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }

    updateData();

    setInterval(updateData, 180000);
}





fetch('https://api.openweathermap.org/data/2.5/weather?lat=2.977007&lon=101.733376&appid=2917ab3f70f94f881d8a1b5dff4039d6')
    .then(response => response.json())
    .then(data => {
        if (data && data.sys && data.sys.sunrise && data.sys.sunset) {
            const sunriseTimestamp = data.sys.sunrise;
            const sunsetTimestamp = data.sys.sunset;

            const sunriseDate = new Date(sunriseTimestamp * 1000);
            const sunsetDate = new Date(sunsetTimestamp * 1000);

            const sunriseTime = sunriseDate.toLocaleTimeString();
            const sunsetTime = sunsetDate.toLocaleTimeString();

            // Update the sunrise and sunset elements with the obtained times
            document.getElementById('sunrise-time').textContent = sunriseTime;
            document.getElementById('sunset-time').textContent = sunsetTime;
        } else {
            console.error('Missing sunrise or sunset data:', data);
        }
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });




function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const time = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').innerText = time;

  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  const date = `${day}/${month}/${year}`;
  document.getElementById('date').innerText = date;
}

// Update the clock and date immediately
updateClock();

// Update the clock and date every second
setInterval(updateClock, 1000);



///////////////////////////////////////////////////

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = Math.random() * 100 + '%';
    raindrop.style.animationDelay = Math.random() * 2 + 's';
    document.querySelector('.rain').appendChild(raindrop);
}

for (let i = 0; i < 50; i++) {
    createRaindrop();
}
