
//Add an event listener on the windows load that when true runs function goGetta at an interval of 1000.
// window.addEventListener("load", function(){
//     setInterval(getChatLog, 1000);
//   });

document.getElementById("dsp-btn").addEventListener('click', function(){
  getChatLog();
});
//This gets the chat log from get.php as soon as the page is loaded without having to wait for the 1000
// interval in the button function. If taken out it still works correctly just not instant showing of chat
  AjaxGet("get.php",chatLogDiv);


//Runs the same function as previous but this is set to a 1000 loop to keep getting it and updating tha chat
  function getChatLog (){
    AjaxGet("get.php",chatLogDiv);
  }

//Response is the variable containing the information from the url the AjaxGet was sent to get.
//It then takes the data in response and puts it in the .innerHTML
  function chatLogDiv(chatLogData)
    {
      document.getElementById('grabphpdiv').innerHTML = chatLogData
    };
