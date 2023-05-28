


function updateWeatherData() {
    fetch('/weather-data')
        .then(response => response.json())
        .then(data => {


            ////////////This is for temperature

            if (data && data.data && data.data.conditions && Array.isArray(data.data.conditions) && data.data.conditions.length > 0 && data.data.conditions[0].hasOwnProperty('temp')) {
                const temperature = data.data.conditions[0].temp;
                const temperatureCelsius = (temperature - 32) * (5 / 9); // Convert temperature from Fahrenheit to Celsius
                console.log('Temperature:', temperatureCelsius);
                document.getElementById('temperature').innerHTML = temperatureCelsius.toFixed(1) + '&deg;C';

                // Update the gauge chart based on the temperature
                google.charts.setOnLoadCallback(function () {
                    var gaugeData = google.visualization.arrayToDataTable([
                        ['Label', 'Value'],
                        ['Temperature', temperatureCelsius]
                    ]);

                    var gaugeOptions = {
                        width: 400,
                        height: 120,
                        redFrom: 50,
                        redTo: 60,
                        yellowFrom: 40,
                        yellowTo: 50,
                        minorTicks: 5,
                        min: 0,
                        max: 60,
                    };

                    var gaugeChart = new google.visualization.Gauge(document.getElementById('temperature_gauge'));
                    gaugeChart.draw(gaugeData, gaugeOptions);
                });



                /////////////////////////this is for humidity




                if (data && data.data && data.data.conditions && Array.isArray(data.data.conditions) && data.data.conditions.length > 0 && data.data.conditions[0].hasOwnProperty('hum')) {
                    const humidity = data.data.conditions[0].hum;
                    console.log('Humidity:', humidity);
                    document.getElementById('humidity').textContent = humidity;

                    // Update the gauge chart based on the humidity
                    google.charts.setOnLoadCallback(function () {
                        var gaugeData = google.visualization.arrayToDataTable([
                            ['Label', 'Value'],
                            ['Humidity', temperature]
                        ]);

                        var gaugeOptions = {
                            width: 400,
                            height: 120,
                            redFrom: 50,
                            redTo: 60,
                            yellowFrom: 40,
                            yellowTo: 50,
                            minorTicks: 5,
                            min: 0,
                            max: 60,

                        };

                        var gaugeChart = new google.visualization.Gauge(document.getElementById('humidity_gauge'));
                        gaugeChart.draw(gaugeData, gaugeOptions);
                    });


                    ////////////////////////////// this for dew point



                    if (data && data.data && data.data.conditions && Array.isArray(data.data.conditions) && data.data.conditions.length > 0 && data.data.conditions[0].hasOwnProperty('dew_point')) {
                        const dew = data.data.conditions[0].dew_point;
                        console.log('Dew Point:', dew);
                        document.getElementById('dew point').textContent = dew;

                        // Update the gauge chart based on the humidity
                        google.charts.setOnLoadCallback(function () {
                            var gaugeData = google.visualization.arrayToDataTable([

                                ['Label', 'Value'],
                                ['Dew Point', dew]

                            ]);

                            var gaugeOptions = {
                                width: 400,
                                height: 120,
                                redFrom: 50,
                                redTo: 60,
                                yellowFrom: 40,
                                yellowTo: 50,
                                minorTicks: 5,
                                min: 0,
                                max: 60,

                            };


                            var gaugeChart = new google.visualization.Gauge(document.getElementById('dew_gauge'));
                            gaugeChart.draw(gaugeData, gaugeOptions);
                        });



                        ///////////////////////this for wet bulb



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
                            google.charts.setOnLoadCallback(function () {
                                var gaugeData = google.visualization.arrayToDataTable([
                                    ['Label', 'Value'],
                                    ['Wet Bulb', wet]
                                ]);

                                var gaugeOptions = {
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

                                var gaugeChart = new google.visualization.Gauge(
                                    document.getElementById('wet_gauge')
                                );
                                gaugeChart.draw(gaugeData, gaugeOptions);
                            });





                            //////////////////////// here for heat inndex


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
                                google.charts.setOnLoadCallback(function () {
                                    var gaugeData = google.visualization.arrayToDataTable([
                                        ['Label', 'Value'],
                                        ['Heat Index', heat]
                                    ]);

                                    var gaugeOptions = {
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

                                    var gaugeChart = new google.visualization.Gauge(
                                        document.getElementById('heat_gauge')
                                    );
                                    gaugeChart.draw(gaugeData, gaugeOptions);
                                    
                                });

                            

 


                                ///////// last line before else statement

                            } else {
                                console.error('Missing temperature property in weather data:', data);
                            }

                        }
                    }

                }
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
                    ['Pressure', {v: pressureInHg, f: pressureInHg.toFixed(2) + ' inHg'}]
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
