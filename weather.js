//openweatherapi key
//61cd690205f32c6ae85304d6b9dbcb53

const date = document.getElementById('date');
const city = document.getElementById('city');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');
const temp = document.getElementById('temperature');


const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

//new instance of date
let dateObj = new Date();
let month = monthNames[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate()-1;
let year = dateObj.getUTCFullYear();


date.innerHTML = `${month} ${day}, ${year}`

const app = document.getElementById('app');

const getWeather = async () => {
    try{

        const cityName = document.getElementById('searchBarInput').value
        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=61cd690205f32c6ae85304d6b9dbcb53`,{
            headers: {
                Accept: "application/json"
            }}
        );

        const weatherData = await weatherDataFetch.json();
        console.log(weatherData);
        city.innerHTML = `${weatherData.name}`;
        description.innerHTML = `${weatherData.weather[0].main}`
        tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" />`;
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C</h2>`;    
        tempMax.innerHTML = `${weatherData.main.temp_max}°C`;
        tempMin.innerHTML = `${weatherData.main.temp_min}°C`;
    }catch(error){
        console.log(error)
    }
}

getWeather();