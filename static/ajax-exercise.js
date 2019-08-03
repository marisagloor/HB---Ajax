"use strict";


// PART 1: SHOW A FORTUNE
function updateFortune(fortune) {
  console.log(`Result from the server ${fortune}`);
  $('#fortune-text').html(fortune);
  console.log('Reached end of the function');
  }

function showFortune(evt) {
  $.get('/fortune', updateFortune);
  console.log('Get request sent to server');
}
$('#get-fortune-button').on('click', showFortune);
  
  // TODO: get the fortune and show it in the #fortune-text div









// PART 2: SHOW WEATHER
function updateWeather(weather) {
  console.log(`Result from the server ${weather.forecast}`);
  $('#weather-info').html(weather.forecast);
  console.log('Reached end of the function');
}
function showWeather(evt) {
  evt.preventDefault();

  let url = "/weather.json";
  let formData = {"zipcode": $("#zipcode-field").val()};

  $.get(url, formData, updateWeather);
  console.log('Request weather data');

   // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


