(function(){
  var boxen = document.querySelectorAll(".box")
  var closestBox = boxen[0]
  window.addEventListener("touchend", function(){
    var curScroll = document.body.scrollTop
    boxen.forEach(function(box){
      box.classList.remove("full")
      if(Math.abs(box.offsetTop - curScroll) < Math.abs(closestBox.offsetTop - curScroll)) {
        closestBox = box
      }
    })

    closestBox.classList.add("full")
    document.body.scrollTop = closestBox.offsetTop
  })
})()
