
  var map;
  function initMap() {
    // Constructor creates a new map = only center and zoom required.
    // Puts the new map in the map div
    map = new google.maps.Map(document.getElementById('map'),{
      center: {lat: 51.519586, lng: -0.126325},
      zoom: 12 //up to level 21
    });

  }
  window.onload = function(){

      // $("#button").on("click",function(){
      document.getElementById("button").onclick = function fun() {
        var layer = new google.maps.FusionTablesLayer({
          query: {
            select: 'Location',
            from:'1fA3FdouywullIVBg11FkVzMEKGkO2SF_lpKt5V0N'

          }
        })
        layer.setMap(map);

      }
  };
