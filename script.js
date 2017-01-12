// window.onload = function(){
//   document.getElementById("sidebar-btn").onclick = function go() {
//
//   }
// }


$(document).ready(function(){

    $("#sidebar-btn").on("click",function(){

        $("#sidebar").toggleClass("visible");
    })
})

$(document).ready(function(){

    $("#searchBar-btn").on("click",function(){

        $("#searchBar").toggleClass("visible");
    })
})


  var map;
  function initMap() {
    // Constructor creates a new map = only center and zoom required.
    // Puts the new map in the map div
    map = new google.maps.Map(document.getElementById('map'),{
      center: {lat: 51.556241,lng:-0.279530},
      zoom: 14 //up to level 21
    });

    var wembley = {lat: 51.556241,lng:-0.279530};
    var marker = new google.maps.Marker({
      position: wembley,
      map: map,
      title: 'Wembley Stadium'
    })

  }
  window.onload = function(){

      document.getElementById("button").onclick = function fun() {
        var layer = new google.maps.FusionTablesLayer({
          query: {
            select: 'Location',
            from:'1fA3FdouywullIVBg11FkVzMEKGkO2SF_lpKt5V0N'

          }
        })
        layer.setMap(map);
      }
      document.getElementById("button2").onclick = function fun2() {
        var layer = new google.maps.FusionTablesLayer({
          query: {
            select: 'Location',
            from:'1DXKRFcmkpMG5P8o6Y1ruZm0zQOISv7l4B_h-u6z7'

          }
        })
        layer.setMap(map);
      }
    }


        // window.onload = function(){
        //
        //
        //     document.getElementById("button2").onclick = function fun2() {
        //       var layer = new google.maps.FusionTablesLayer({
        //         query: {
        //           select: 'Location',
        //           from:'1DXKRFcmkpMG5P8o6Y1ruZm0zQOISv7l4B_h-u6z7'
        //
        //         }
        //       })
        //       layer.setMap(map);
      // }
  // }
