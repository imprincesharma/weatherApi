// let url ="https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=5e7753666bc1cb9a369bcff8b792a9ad";

const apikey = "5e7753666bc1cb9a369bcff8b792a9ad"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Faridabad&appid=5e7753666bc1cb9a369bcff8b792a9ad";

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")

    async function checkWeather(){
        const response = await fetch(apiUrl + '&appid=${apikey}');
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp-273.15) + "°C";
        document.querySelector(".humadity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";



    }
   checkWeather()
   