const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9ca17cecdamsh71896e7062b4ed6p1b62e9jsn49c132f1d817',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));