(function(){
  var boxen = document.querySelectorAll(".box")
  var i = 0

  window.addEventListener("touchend", function(){

    if (i < boxen.length - 1)
      i++
    else
      i = 0

    document.querySelector(".full").classList.remove("full")
    document.getElementById("wrapper").scrollTop = boxen[i].offsetTop
    boxen[i].classList.add("full")
  })
})()
