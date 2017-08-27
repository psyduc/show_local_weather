$(document).ready(function(){
  var long;
  var lat;
  
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    $("#data").html("latitude: " + lat + "<br>longitude: " + long);
  });
}
  
  var api = "http://api.openweathermap.org/data/2.5/weather?zip=95111,us&appid=289b7a7ca5c5050bef667494bede9613";
  
  $.getJSON(api, function(data){
    
  });
});