<!DOCTYPE html>
  <html>
    <head>
      <title>WhereToPark</title>
      <link rel="stylesheet" type="text/css" href="stylesheets/mainPageStylesheet.css">
      <script src=" http://code.jquery.com/jquery-1.11.3.min.js"></script>
      <script type="text/javascript" src="http://cdn.jsdelivr.net/jquery/1/jquery.min.js"></script>
      <script type="text/javascript" src="http://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
      <link rel="stylesheet" type="text/css" href="http://cdn.jsdelivr.net/bootstrap/3/css/bootstrap.css"/>
      <link href="https://fonts.googleapis.com/css?family=Days+One" rel="stylesheet">
    </head>

    <body>
      <div class="wrapper">
        <div id="top-banner">
          <h1 id="title"><a href="/index.html">WHEREToPARK</a></h1>
        </div>
      </div>

      <div id="leftBar">
        <div id="searchDetails">

          <form>
            <img id="marker" src="images/marker.png">
              <input id="zoom-to-area-text" type="text" placeholder="Wembley,UK" class="search" onkeydown="search()">
              <input id="zoom-to-area" type="button" value=" > ">
            <img id="clock" src="images/clock.png">
              <input id="timeEntry" type="time" placeholder="">
            <img id="calenderFrom" src="images/calenderFrom.png">
              <input id="dateEntryFrom" type="date" placeholder="">
            <img id="calenderTo" src="images/calenderTo.png">
              <input id="dateEntryTo" type="date" placeholder="">
          </form>

        </div>

        <div id="generalSearchFilter">
        </div>

        <div id="routeSearchFilter">
          <p id="demo">Click me.</p>
        </div>
      </div>

      <div id="map"></div>
      <div id="button"></div>
      <div id="button2"></div>

      <div id="sidebar">
        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="parkingRoute.html">Enter a Parking Route</a></li>
          <li><a href="rentYouSpace.html">Rent Your Space</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contactus.html">Contact Us</a></li>
        </ul>
        <div id="sidebar-btn">
          <img id="burger-btn" src="../images/whiteMenu.png">
        </div>
      </div>

      <form name="form1" action="next.html" method="get">
<table>
    <tr>
        <td id="demo">test</td>
    </tr>
</table>
</form>



<script type="text/javascript">
     var dest = "<?php echo $_POST["destination"]; ?>";
     document.getElementById ("zoom-to-area-text").value = dest;
 </script>

  <script src="scripts/mainPageScript.js"></script>


  <!-- //loads the javascript API into the browser //once loaded it will perform the callback which is the function above -->
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDISnI1QTQINxRHdoGv8epY3sLANV4hLZg&v=3&callback=initMap"></script>
  <script src="scripts/indexScript.js"></script>


          <!-- //loads the javascript API into the browser
          //once loaded it will perform the callback which is the function above -->

    </body>
  </html>
