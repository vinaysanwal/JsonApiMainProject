$.getJSON("http://api.ipstack.com/171.61.153.163?access_key=f9d06999043226ba09adb43d84f8b8e2&format=1" , function(data){
  var country = data.country_name;
  var city = data.city;
  var ip = data.ip;
  var cc = "flag-icon flag-icon-"+data.country_code.toLowerCase();
  var yourLat = data.latitude;
  var yourLon = data.longitue;



  $('#con').text(country);
  $('#ip').text(ip);
  $('#cit').text(city);
  $('#flag').addClass(cc);

  var yourPosition = new google.maps.LatLng(yourLat , yourLon);

  var mapOptions = {
    zoom:10,
    center: (yourPosition)
  }

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
});
