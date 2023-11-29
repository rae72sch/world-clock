function updateDublinTime() {
  let dublinElement = document.querySelector("#dublin");
  let dublinDateElement = document.querySelector("#dublin .date");
  let dublinTimeElement = document.querySelector("#dublin .time");

  let dublinData = moment().tz("Europe/Dublin");

  dublinDateElement.innerHTML = dublinData.format("MMMM Do YYYY");
  dublinTimeElement.innerHTML = dublinData.format(
    "h:mm:ss [<small>]A[</small>]");
}

updateDublinTime();
setInterval(updateDublinTime, 1000);


