(function(){
  var boxen = document.querySelectorAll(".box")
  var closestBox = boxen[0]
  window.addEventListener("scroll", function(){
    boxen.forEach(function(box){
      var curScroll = document.body.scrollTop
      if(box.offsetTop - curScroll < closestBox.offsetTop - curScroll) {
        closestBox = box
      }
    })

    document.body.scrollTop = closestBox.offsetTop
  })
})()
