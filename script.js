window.onload = function(){
  document.getElementById("sidebar-btn").onclick = function go() {

  }
}


document.getElementById('zoom-to-area').addEventListener('click', function() {
       zoomToArea();
     });

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
  // window.onload = function(){
  //
  //     document.getElementById("button").onclick = function fun() {
  //       var layer = new google.maps.FusionTablesLayer({
  //         query: {
  //           select: 'Location',
  //           from:'1fA3FdouywullIVBg11FkVzMEKGkO2SF_lpKt5V0N'
  //         }
  //
  //       })
  //
  //
  //       layer.setMap(map);
  //     }
  //     document.getElementById("button2").onclick = function fun2() {
  //       var layer = new google.maps.FusionTablesLayer({
  //         query: {
  //           select: 'Location',
  //           from:'1DXKRFcmkpMG5P8o6Y1ruZm0zQOISv7l4B_h-u6z7'
  //
  //         }
  //       })
  //       layer.setMap(map);
  //     }
  //   }


  window.onload = function(){

        var layer = new google.maps.FusionTablesLayer({
          query: {
            select: 'Location',
            from:'1fA3FdouywullIVBg11FkVzMEKGkO2SF_lpKt5V0N'
          }

        })
        layer.setMap(map);

        document.getElementById("button2").onclick = function fun2() {
              var layer = new google.maps.FusionTablesLayer({
                query: {
                  select: 'Location',
                  from:'1DXKRFcmkpMG5P8o6Y1ruZm0zQOISv7l4B_h-u6z7'

                }
              })
              layer.setMap(map);
            }
      };

      function search() {
        if(event.keyCode == 13) {
            zoomToArea();
        }
      }
      // This function takes the input value in the find nearby area text input
      // locates it, and then zooms into that area. This is so that the user can
      // show all listings, then decide to focus on one area of the map.
      function zoomToArea() {
        // Initialize the geocoder.
        var geocoder = new google.maps.Geocoder();
        // Get the address or place that the user entered.
        var address = document.getElementById('zoom-to-area-text').value;
        // Make sure the address isn't blank.
        if (address == '') {
          window.alert('You must enter an area, or address.');
        } else {
          // Geocode the address/area entered to get the center. Then, center the map
          // on it and zoom in
          geocoder.geocode(
            { address: address,
              componentRestrictions: {country:'UK'}
            }, function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                map.setZoom(15);
              } else {
                window.alert('We could not find that location - try entering a more' +
                    ' specific place.');
              }
            });
        }
      }

      //
      // <input type="text" placeholder="some text" class="search" onkeydown="search(this)"/>
      // <input type="text" placeholder="some text" class="search" onkeydown="search(this)"/>
//
//   function search(ele) {
//     if(event.keyCode == 13) {
//         alert(ele.value);
//     }
// }




      // function zoomToAreaTwo(ele) {
      //   // Initialize the geocoder.
      //   var geocoder = new google.maps.Geocoder();
      //   // Get the address or place that the user entered.
      //   var address = document.getElementById('zoom-to-area-text').value;
      //   // Make sure the address isn't blank.
      //   if (address == '') {
      //     window.alert('You must enter an area, or address.');
      //   } else {
      //     // Geocode the address/area entered to get the center. Then, center the map
      //     // on it and zoom in
      //     geocoder.geocode(
      //       { address: address,
      //         componentRestrictions: {country:'UK'}
      //       }, function(results, status) {
      //         if (status == google.maps.GeocoderStatus.OK) {
      //           map.setCenter(results[0].geometry.location);
      //           map.setZoom(15);
      //         } else {
      //           window.alert('We could not find that location - try entering a more' +
      //               ' specific place.');
      //         }
      //       });
      //   }
      // }
