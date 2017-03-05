

 <!DOCTYPE html>
   <html>
     <head>
       <title>WhereToPark</title>
       <link href="https://fonts.googleapis.com/css?family=Days+One" rel="stylesheet">

     </head>

     <body>
 <input id="zoom-to-area-text" type="text" placeholder="Wembley,UK">


   <script type="text/javascript">
        var dest = "<?php echo $_POST["destination"]; ?>";
        document.getElementById ("zoom-to-area-text").value = dest;
    </script>
  <script src="/scripts/indexScript.js"></script>

     </body>
   </html>
