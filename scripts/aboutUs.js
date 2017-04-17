window.onload = function(){
  document.getElementById("sidebar-btn").onclick = function go() {

  }
}


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
