var weatherInfo = document.getElementById("page");

var city = document.getElementById("search");


async function checkWeather() {
    var city = document.getElementById("search");

    var apiKey = "{here create your own api key}";

    var  apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

    var response = await fetch(apiUrl + city.value + `&appid=${apiKey}`)
    var data = await response.json()



    const regionNames = new Intl.DisplayNames(
        ['en'], {type: 'region'}
     );

    
    try {
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("humidity").innerHTML = Math.round(data.main.temp) +" %";
    document.getElementById("wind").innerHTML = data.wind.speed + "km/h";
    document.getElementById("country").innerHTML = regionNames.of(data.sys.country);
    }
    catch(err) {
        document.getElementById("city").innerHTML = ` ${document.getElementById("search").value} doesn't exist!`;
        document.getElementById("temp").innerHTML = "???";
        document.getElementById("humidity").innerHTML = "???";
        document.getElementById("wind").innerHTML = "???";
        document.getElementById("country").innerHTML = "???"
    }

}    

document.body.onkeydown = function(e) {
    if (e.keyCode==13)
        checkWeather();
};



