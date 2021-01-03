// Here we put all DOM manipulation
const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details"); //we select the whole parent then we will change its innerHTML
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

//Creating New Instance to INteract With Forecast Class
const forecast = new Forecast();

// /**
//  *
//  *
//  *
//  *  // Updating The UI (name , temperature and the images)
//  */
// const updateUI = (data) => {
//   //   const cityDets = data.cityDets;
//   //   const weather = data.weather;
//   // destructureproperties

//   const { cityDets, weather } = data;
//   //update details template
//   details.innerHTML = `
//      <h5 class="my-3">${cityDets.EnglishName}</h5>
//         <div class="my-3">${weather[0].WeatherText}</div>
//         <div class="display-4 my-4">
//             <span>${weather[0].Temperature.Metric.Value}</span>
//             <span>&deg;C</span>
//         </div>
//     `;
//   // update the night/day and icon images

//   //   let timeSrc = null;
//   //   if (weather[0].IsDayTime) {
//   //     timeSrc = "../img/day.svg";
//   //   } else {
//   //     timeSrc = "../img/night.svg";
//   //     }
//   // using turnary
//   const timeSrc = weather[0].IsDayTime ? "../img/day.svg" : "../img/night.svg";
//   time.setAttribute("src", timeSrc);

//   const iconSrc = `../img/icons/${weather[0].WeatherIcon}.svg`;
//   icon.setAttribute("src", iconSrc);

//   // remove the d-none class if present
//   if (card.classList.contains("d-none")) {
//     card.classList.remove("d-none");
//   }
// };

// const updateCity = async (city) => {
//   const cityDets = await getCity(city); // we can call functions from another file since it's called in index.html before this file
//   const weather = await getWeather(cityDets.Key);// passing Key property located in cityDets object for city Data
//   return { cityDets, weather }; // we used object shorthand because the property and its value are the same
// };

// /*
//  *
//           ////// This function runs first
//  *
//
//  */

// cityForm.addEventListener("submit", (e) => {
//   // prevent Default action
//   e.preventDefault();

//   // get city name
//   const city = cityForm.city.value.trim();
//   cityForm.reset(); // it resets the form (reset the input field)

//   //update the ui with new city
//   updateCity(city)
//     .then((data) => {
//       // we call updateUI function here by passing Data object
//       updateUI(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   // set a local storage
//   localStorage.setItem("city", city);
// });

// if (localStorage.getItem("city")) {
//   updateCity(localStorage.getItem("city"))
//     .then((data) => {
//       updateUI(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

/**
 * 
 * 
 * 
 * 
 * 
 * 
          Using Class version starts here with same constants above
*

/**
 *
 *
 *
 *  // Updating The UI (name , temperature and the images)
 */
const updateUI = (data) => {
    //   const cityDets = data.cityDets;
    //   const weather = data.weather;
    // destructureproperties

    const { cityDets, weather } = data;
    //update details template
    details.innerHTML = `
     <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather[0].WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather[0].Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;
    // update the night/day and icon images

    //   let timeSrc = null;
    //   if (weather[0].IsDayTime) {
    //     timeSrc = "../img/day.svg";
    //   } else {
    //     timeSrc = "../img/night.svg";
    //     }
    // using turnary
    const timeSrc = weather[0].IsDayTime ? "./img/day.svg" : "./img/night.svg";
    time.setAttribute("src", timeSrc);

    const iconSrc = `./img/icons/${weather[0].WeatherIcon}.svg`;
    icon.setAttribute("src", iconSrc);

    // remove the d-none class if present
    if (card.classList.contains("d-none")) {
        card.classList.remove("d-none");
    }
};

/**
 * 
 * 
 * 
 * 
          ////// This function runs first
 * 
 
 */

cityForm.addEventListener("submit", (e) => {
    // prevent Default action
    e.preventDefault();

    // get city name
    const city = cityForm.city.value.trim();
    cityForm.reset(); // it resets the form (reset the input field)

    //update the ui with new city
    forecast
        .updateCity(city)
        .then((data) => {
            // we call updateUI function here by passing Data object
            updateUI(data);
        })
        .catch((err) => {
            console.log(err);
        });

    // set a local storage
    localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
    forecast
        .updateCity(localStorage.getItem("city"))
        .then((data) => {
            updateUI(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

document.createNode;