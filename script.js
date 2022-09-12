let weather = {
    apiKey: "dc688a111aca0c917efc99b105341f47",
    fetchWeatherAPI: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => console.log(data));

    },
    showWeather: function (data) {
        //getting data from the api
        const { name } = data;
        //getting data from the "weather" array in the api documentation
        const { icon, description } = data.weather;
        //getting data from the "main" object in the api documentation
        const { temp, humidity } = data.main;
        //getting data from the "wind" object in the api documentation
        const { speed } = data.wind;
        }
};