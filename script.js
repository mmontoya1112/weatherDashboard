let weather = {
    apiKey: "dc688a111aca0c917efc99b105341f47",
    fetchWeatherAPI: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.showWeather(data));

    },
    showWeather: function (data) {
        //getting data from the api
        const { name } = data;
        //getting data from the "weather" array in the api documentation
        const { icon, description } = data.weather[0];
        //getting data from the "main" object in the api documentation
        const { temp, humidity } = data.main;
        //getting data from the "wind" object in the api documentation
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        //selects from html to change to what the api is fetching 
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = "desciption: " + description;
        document.querySelector(".temperature").innerText = "temperature: " + temp + "°F";
        document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "wind speed " + speed + "mph";
        },
        search: function (){
            this.fetchWeatherAPI(document.querySelector(".searchBar").value);
        }
};
//this gets the input from search bar when clicked
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
})

