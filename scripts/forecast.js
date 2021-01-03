// /*Here is how the Weather App Works:

//    1) we need an API request for the city location to retrieve its key
//    2) second API request using the key we got from previous request to get The Data we are looking for 'weather condition'

// */
// /*We have a key to use and which tells the server Weather which app is using that Data */
// const key = "VV2V8OoyGOWmwsAKZjQdJRu2kBsvV8tQ"; // you have the right to access 50 times

// // making a requet to get the location's key because it's required to get its data

// //always use async function with API fetch

// // get weather information
// const getWeather = async (id) => {
//   const base = "http://dataservice.accuweather.com/currentconditions/v1/";
//   const query = `${id}?apikey=${key}`;
//   const response = await fetch(base + query);
//   const data = await response.json();
//   return data;
// };
// // get city information
// const getCity = async (city) => {
//   /*The idea here is to build our URL including city name and our Key above then fetch the API*/
//   /*the Base is Resource URL */
//   const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
//   /*then we need to query the city name and the key with base and fetch it(the method is shown on the developer.accuweather)*/
//   const query = `?apikey=${key}&q=${city}`; // this query is reuired to be concatinated with the base, where '?' means query. '&' means and
//   const response = await fetch(base + query);
//   const data = await response.json(); // convert the response to json format
//   return data[0]; // 0 stands for the first element in the Array
// };

/**
 *
 *
 *
 *
 *
 *    We use class Method:
 *
 *
 *
 *   /// wrapping the code inside a class to do the same task
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

class Forecast {
    constructor() {
        // You don't have to pass any parameter because everything here is static
        // we set here all the Constants as Properties
        this.key = "VV2V8OoyGOWmwsAKZjQdJRu2kBsvV8tQ";
        this.cityURL =
            "http://dataservice.accuweather.com/locations/v1/cities/search";
        this.weatherURL =
            "http://dataservice.accuweather.com/currentconditions/v1/";
    }

    // we with our methods Outside the constructor
    // 1- method to get the city Key
    // NOTE that async beale the beginning of the function
    async getCity(city) {
            const query = `?apikey=${this.key}&q=${city}`; // city will be got from the input field
            const response = await fetch(this.cityURL + query);
            const data = await response.json();
            return data[0];
        }
        // 2- method to get weather information
    async getWeather(id) {
            const query = `${id}?apikey=${this.key}`;
            const response = await fetch(this.weatherURL + query);
            const data = await response.json();
            return data;
        }
        // 3- method of getting the weather infromation by invoking the functions above
    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return { cityDets, weather };
    }
}