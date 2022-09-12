let weather = {
    "apiKey": "dc688a111aca0c917efc99b105341f47"
    fetchWeather: function(){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
    }
}