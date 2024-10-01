const $currentTemp = document.querySelector('#current-temp')
const $weatherIcon = document.querySelector('#weather-icon')
const $weatherFigcaption = $weatherIcon.parentElement.querySelector('figcaption')
const url = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = '' //API KEY

async function apiFetch() {
	try {
		const response = await fetch(`${url}?lat=${49.75}&lon=${6.64}&units=metric&appid=${API_KEY}`)
		
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

async function displayResults() {
	const data = await apiFetch()
	console.log({data});
	$currentTemp.textContent = data.main.temp + 'C°'
	$weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`)
	$weatherIcon.setAttribute('alt', `Weather Icon`)
	$weatherFigcaption.textContent = data.weather[0].description
}

displayResults()