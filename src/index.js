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

updateTime();
setInterval(updateTime, 1000);
