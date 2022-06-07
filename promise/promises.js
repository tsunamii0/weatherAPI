const list = document.querySelector(".weatherul")
const input = document.querySelector('.cityInput')
const search = document.querySelector('.button-86')
const imgHTML = document.querySelector('.weatherImg')
const div = document.querySelector('.weatherDiv')

const li = document.createElement('li');
const li0 = document.createElement('li');
const li1 = document.createElement('li');

search.addEventListener('click', searchFunc)

const baseURL= 'http://api.openweathermap.org/data/2.5/weather?appid=4d6f7c508a8274ee740483e4aab8ca29'

function searchFunc(){
    if(input.value.length === 0){
        console.log('sui')
        input.classList.add('erroranim')
        setTimeout(() => {
            input.classList.remove('erroranim')
        }, 500);
    }
    if(input.value.length > 0){
    fetchWeather(input.value)
    input.value = ''
    }
}

const fetchWeather = async (city, system) => {
    const users = await fetch(baseURL + '&q=' + city + '&s=' + 'metrics')
    .catch(err => console.log(err))
    const data = await users.json().catch(err => console.log(err))
    console.log(data)
    const temp = `${data.main.temp}`
    const finaltemp = temp - 273.15
    const icon = `${data.weather[0].icon}`
    imgHTML.src = '/icons/' + icon + '.png'
    console.log(`/icons/` + `${data.weather[0].icon}` + '.png')
    li.innerHTML = (`${data.name}` ) 
    list.appendChild(li);
    li0.innerHTML = (Math.round(finaltemp) + 'C°');    
    list.appendChild(li0);
    li1.innerHTML = (data.weather[0].main);    
    list.appendChild(li1);
}


fetchWeather('travnik')