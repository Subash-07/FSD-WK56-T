// Import the fetch API if using Node.js
// const fetch = require('node-fetch'); // Uncomment this line if using Node.js

// Fetch data from REST Countries API
async function fetchData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();
        return countries;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Get all the countries from the Asia continent/region using Filter method
async function getCountriesFromAsia() {
    const countries = await fetchData();
    const asianCountries = countries.filter(country => country.region === "Asia");
    console.log('Asian Countries:', asianCountries);
}

// Get all the countries with a population of less than 2 lakhs using Filter method
async function getCountriesWithSmallPopulation() {
    const countries = await fetchData();
    const smallPopulationCountries = countries.filter(country => country.population < 200000);
    console.log('Countries with population less than 200,000:', smallPopulationCountries);
}

// Print name, capital, and flag using forEach method
async function printCountryDetails() {
    const countries = await fetchData();
    countries.forEach(country => {
        console.log(`Name: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'No capital'}, Flag: ${country.flags.svg}`);
    });
}

// Print the total population of countries using reduce method
async function printTotalPopulation() {
    const countries = await fetchData();
    const totalPopulation = countries.reduce((total, country) => total + country.population, 0);
    console.log('Total Population:', totalPopulation);
}

// Print the country that uses US dollars as currency
async function findCountriesUsingUSD() {
    const countries = await fetchData();
    const countriesUsingUSD = countries.filter(country => 
        country.currencies && Object.keys(country.currencies).includes("USD")
    );
    console.log('Countries using US Dollars:', countriesUsingUSD);
}

// Running the functions to see the output
getCountriesFromAsia();
getCountriesWithSmallPopulation();
printCountryDetails();
printTotalPopulation();
findCountriesUsingUSD();

