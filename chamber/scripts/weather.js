const $currentTemp = document.querySelector('#current-temp')
const $weatherIcon = document.querySelector('#weather-icon')
const $todaysTemp = document.querySelector('#todays-temp')
const $tomorrowsTemp = document.querySelector('#tomorrows-temp')
const $nextDayTemp = document.querySelector('#next-day-temp')
const $weatherDetail = document.querySelector('#weather-detail')

const url = `https://api.openweathermap.org/data/2.5/`
const API_KEY = '25d27aefb9cc703822d9c3a4dd3ac24f'

async function getWeather() {
	try {
		const response = await fetch(`${url}weather?lat=${4.61}&lon=${-74.12}&units=metric&appid=${API_KEY}`)
		
		if (response.ok) {
			const data = await response.json()
			return data
		} else {
			throw new Error(await response.json())
		}
	} catch (err) {
		console.error(err)		
		return {}
	}
}

async function getForecast() {
	let data = {}
	try {
		const response = await fetch(`${url}forecast?lat=${4.61}&lon=${-74.12}&units=metric&appid=${API_KEY}`)
		
		if (response.ok) {
			data = await response.json()
		} else {
			throw new Error(await response.json())
		}
	} catch (err) {
		console.error(err)
	}
	return data
}

async function displayResults() {
	const forecastData = await getForecast()
	const weatherData = await getWeather()
	const currentDate = new Date().getDate()
	const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	
	forecastData.list = forecastData.list.reduce((acc, cur) => {
		return (
			cur.dt == acc[acc.length -1].dt + 86400 &&
			new Date(cur.dt * 1000).getDate() > currentDate
		) ? [...acc, cur] : [...acc]
	}, [forecastData.list[0]])
	
	$tomorrowsTemp.innerHTML = `${weekDays[(new Date().getDay() + 1) % 7]}: <b>${Math.round(forecastData.list[0].main.temp)}C°</b>`
	$nextDayTemp.innerHTML = `${weekDays[(new Date().getDay() + 2) % 7]}: <b>${Math.round(forecastData.list[1].main.temp)}C°</b>`
	$todaysTemp.innerHTML =  `Today: <b>${Math.round(weatherData.main.temp)}C°</b>`
	$weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`)
	$weatherIcon.setAttribute('alt', `Weather Icon`)

	const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
	const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })

	$weatherDetail.innerHTML = `<b>${Math.round(weatherData.main.temp)}C°</b></br>
		${weatherData.weather[0].main}</br>
		High: ${Math.round(weatherData.main.temp_max)}°</br>
		Low: ${Math.round(weatherData.main.temp_min)}°</br>
		Humidity: ${weatherData.main.humidity}%</br>
		Sunrise: ${sunrise}</br>
		Sunset: ${sunset}</br>`
}

displayResults()