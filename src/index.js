// Dublin
function updateTime() {
  // Dublin
  let dublinElement = document.querySelector("#dublin");
  if (dublinElement) {
    let dublinDateElement = document.querySelector("#dublin .date");
    let dublinTimeElement = document.querySelector("#dublin .time");

    let dublinData = moment().tz("Europe/Dublin");

    dublinDateElement.innerHTML = dublinData.format("MMMM Do YYYY");
    dublinTimeElement.innerHTML = dublinData.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Chicago
  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDateElement = document.querySelector("#chicago .date");
    let chicagoTimeElement = document.querySelector("#chicago .time");

    let chicagoData = moment().tz("America/Chicago");

    chicagoDateElement.innerHTML = chicagoData.format("MMMM Do YYYY");
    chicagoTimeElement.innerHTML = chicagoData.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Perth
  let perthElement = document.querySelector("#perth");
  if (perthElement) {
    let perthDateElement = document.querySelector("#perth .date");
    let perthTimeElement = document.querySelector("#perth .time");

    let perthData = moment().tz("Australia/Perth");

    perthDateElement.innerHTML = perthData.format("MMMM Do YYYY");
    perthTimeElement.innerHTML = perthData.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
