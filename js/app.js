const API_KEY = `c2f8ef33bce20d4882f2178a8e65e1d0`;
const searchTemperature = () => {

    const city = document.getElementById('city_name').value;
    const url = `
    
    https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
    
    
    `;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
  
    // console.log(url)
}

const setInnerText = (id, text) => {

    document.getElementById(id).innerText = text;

} 

const displayTemperature = temperature => {

    setInnerText('city', temperature.name)
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main)
    
    // Set Weather Icon

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather_icon')
    imgIcon.setAttribute('src', url);
    // console.log(imgIcon.setAttribute)

}

