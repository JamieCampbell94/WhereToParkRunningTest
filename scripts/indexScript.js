
      //  var dest = "<?php echo $_POST["destination"]; ?>";
      //  document.getElementById ("zoom-to-area-text").value = dest;





// function getDestination() {
//   var dest = document.getElementById('destination').value
//   console.log(dest);
//   document.getElementById('demo').value = dest;
// }
//  window.onload = function () {
//
//  }



// window.onload = zoomToArea();




// function zoomToArea() {
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

// var map;
// var address;
// function initMap() {
//   // Constructor creates a new map = only center and zoom required.
//   // Puts the new map in the map div
//   map = new google.maps.Map(document.getElementById('map'),
//   address = document.getElementById('zoom-to-area-text').value;
//   if (address == '') {
//       window.alert('You must enter an area, or address.');
//     } else {
//       // Geocode the address/area entered to get the center. Then, center the map
//       // on it and zoom in
//       geocoder.geocode(
//         { address: address,
//           componentRestrictions: {country:'UK'}
//         }, function(results, status) {
//           if (status == google.maps.GeocoderStatus.OK) {
//             map.setCenter(results[0].geometry.location);
//             map.setZoom(15);
//           } else {
//             window.alert('We could not find that location - try entering a more' +
//                 ' specific place.');
//           }
//         });
//     }
//   };
