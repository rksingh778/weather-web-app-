function getWeatherData(event) {
  event.preventDefault();
  const cityNameInput = document.getElementById("cityNameInput");
  const cityName = cityNameInput.value;
const apiKey = "dafa692d4emsh024964421734e59p1ecce4jsncbe0378aaff3";
const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(
  cityName
)}`;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dafa692d4emsh024964421734e59p1ecce4jsncbe0378aaff3",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((response) => {
   console.log(response);
   document.getElementById("city").innerHTML = cityName;
    cloud.innerHTML = response.current.cloud;
   feelslike_f.innerHTML = response.current.feelslike_f;
    gust_kph.innerHTML = response.current.gust_kph;
    humidity.innerHTML = response.current.humidity;
    humidity2.innerHTML = response.current.humidity;
    pressure_mb.innerHTML = response.current.pressure_mb;
    temp_c.innerHTML = response.current.temp_c;
    temp_c2.innerHTML = response.current.temp_c;
    wind_degree.innerHTML = response.current.wind_degree;
    wind_dir.innerHTML = response.current.wind_dir;
    wind_kph.innerHTML = response.current.wind_kph;
    wind_kph2.innerHTML = response.current.wind_kph;
    wind_mph.innerHTML = response.current.wind_mph;
  })
  .catch((error) => {
    console.error(error);
  });
}

submit.addEventListener("click", getWeatherData);
