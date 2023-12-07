function updateTime() {
  // Current Timezone
  let currentElement = document.querySelector("#current");
  if (currentElement) {
    let currentTimezoneElement = document.querySelector("#current-tz");
    let currentDateElement = document.querySelector("#current .date");
    let currentTimeElement = document.querySelector("#current .time");

    let currentTimezone = moment.tz.guess();
    let currentData = moment().tz(currentTimezone);

    currentTimezoneElement.innerHTML = `<h2>Current Timezone</h2> <h3>(${currentTimezone})</h3>`;
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
  let searchCityTime = moment().tz(searchTimezone);
  let searchCityOffset = searchCityTime.utcOffset();
  let diffInMinutes = searchCityOffset - localOffset;
  let diffInHours = diffInMinutes / 60;
  return diffInHours;
}

// Update the displayed city when a user selects a city
function updateCity(event) {
  // get the current timezone and info to be interpolated into the below current city 
  // (the top one) and see if it speeds up loading and doesn't refresh seconds
  let currentTimezone = moment.tz.guess();
  let currentTime = moment().tz(currentTimezone);

  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  let timeDifference = timezoneDiff(cityTimezone);
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2 class="current-header">Current Timezone</h2>
      <h3>(${currentTimezone})</h3>
      <div class="date">${currentTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${currentTime.format(
      "h:mm:ss"
    )} <small>${currentTime.format("A")}</small></div>
  </div>
    
  <div class="city">
    <div>
      <h2>${cityName}</h2> 
      <h3>(${cityTimezone})</h3>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      <div class="difference">Difference from current timezone: ${timeDifference} hours</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
    <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);