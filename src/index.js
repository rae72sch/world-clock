// Dublin
function updateTime() {
  // Current Timezone
  let currentElement = document.querySelector("#current");
  if (currentElement) {
    let currentTimezoneElement = document.querySelector("#current-tz");
    let currentDateElement = document.querySelector("#current .date");
    let currentTimeElement = document.querySelector("#current .time");

    // let dublinData = moment().tz("Europe/Dublin");
    let currentTimezone = moment.tz.guess();
    let currentData = moment().tz(currentTimezone);

    currentTimezoneElement.innerHTML = `Current Timezone <br><small>(${currentTimezone})</small>`;
    currentDateElement.innerHTML = currentData.format("MMMM Do YYYY");
    currentTimeElement.innerHTML = currentData.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Chicago
  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDateElement = document.querySelector("#chicago .date");
    let chicagoTimeElement = document.querySelector("#chicago .time");
    let chicagoDifferenceElement = document.querySelector(
      "#tz-difference-chicago"
    );

    let chicagoData = moment().tz("America/Chicago");

    let timeDifferenceChicago = timezoneDiff("America/Chicago");

    chicagoDateElement.innerHTML = chicagoData.format("MMMM Do YYYY");
    chicagoTimeElement.innerHTML = chicagoData.format(
      "h:mm:ss [<small>]A[</small>]"
    );
    chicagoDifferenceElement.innerHTML = `Difference from current timezone: ${timeDifferenceChicago} hours`;
  }

  // Perth
  let perthElement = document.querySelector("#perth");
  if (perthElement) {
    let perthDateElement = document.querySelector("#perth .date");
    let perthTimeElement = document.querySelector("#perth .time");
    let perthDifferenceElement = document.querySelector("#tz-difference-perth");

    let perthData = moment().tz("Australia/Perth");

    let timeDifferencePerth = timezoneDiff("Australia/Perth");

    perthDateElement.innerHTML = perthData.format("MMMM Do YYYY");
    perthTimeElement.innerHTML = perthData.format(
      "h:mm:ss [<small>]A[</small>]"
    );
    perthDifferenceElement.innerHTML = `Difference from current timezone: ${timeDifferencePerth} hours`;
  }
}

// Calculate the difference between the current timezone and the displayed timezone(s)
function timezoneDiff(searchTimezone) {
  let localTimezone = moment.tz.guess();
  let localTime = moment().tz(localTimezone);
  let localOffset = localTime.utcOffset();
  console.log(localOffset);
  let searchCityTime = moment().tz(searchTimezone);
  let searchCityOffset = searchCityTime.utcOffset();
  let diffInMinutes = searchCityOffset - localOffset;
  let diffInHours = diffInMinutes / 60;
  return diffInHours;
}

// Update the displayed city when a user selects a city
function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  let timeDifference = timezoneDiff(cityTimezone);
  citiesElement.innerHTML = `
  <div class="city" id="current">
    <div>
      <h2 id="current-tz"></h2>
      <div class="date"></div>
    </div>
    <div class="time"><small>AM</small></div>
  </div>
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
    <div class="difference-bottom">Difference from current timezone: ${timeDifference} hours</div>
    <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

// call the updateCity function in each city, passing it the timezone for that city
// change the function to return the difference, not log it to the console
// Put the returned figure into a sentence in the innerHTML for the default cities
// Do the same for the selected city's innerHTML
// Change the dublin code to local
