async function getCountryWeather(countryName) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Loading....'

    try {
        const countryRes = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        if (!countryRes.ok) {
            throw new Error('Country not found');
        }
        const countryData = await countryRes.json();
        const country = countryData[0]
        const name = country.name.common;
        const capital = country.capital?.[0] || 'unknown';
        if (!country.capitalInfo || !Array.isArray(country.capitalInfo.latlng)) {
            throw new Error('Capital coordinates not available for this country');
        }
        const [lat, lon] = country.capitalInfo.latlng;


        console.log(countryData);

        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        if (!weatherRes.ok) {
            throw new Error('Weather info not found');
        }
        const weatherData = await weatherRes.json();

        const temperature = weatherData.current_weather.temperature;

        resultDiv.innerHTML = `<h3>Country: ${name}</h3> 
            <p><strong>Capital:</strong>${capital}</p>
            <p><strong>Current Temperature:</strong>${temperature}C</p>`;

    } catch (error) {
        resultDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
}

function handleSearch() {
    const countryInput = document.getElementById('countryInput').value.trim();
    if (countryInput) {
        getCountryWeather(countryInput);
    }
}