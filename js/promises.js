$(document).ready(function() {

  /*
  In this challenge, you'll learn how to use promises to make independent requests as well as how to make dependendent requests

  Part 1: Return what the current weather is based on a user's location (you can't use the location API though ;)

  - When you click the Weather button, the current weather should be shown in the #weather-results section
  - Use http://www.ip-api.com/json/ to get a user's location. This uses your IP address to get an estimate of your location
  - With the result of that request, make another request to determine the current weather
    - Use http://openweathermap.org/current
    - The API is really straightforward, but you'll have to pass an additional parameter to getJSON in order to get it working!
      - Take a look at jQuery's getJSON() API to see what that extra parameter is! http://api.jquery.com/jquery.getjson/
  
  Part 2: Show the difference between parallel and serial promises

  - Below I've implemented a couple of promises that just use timeouts, and return numbers
  - When the user clicks the serial button: each of the promises will execute one by one, and you will return the result in #slow-result
  - When the user clicks the parallel button: each of the promises will execute at the same time, and you will return the result in #fast-result
  - This is to show the immense importance of network optimization!
   */
});