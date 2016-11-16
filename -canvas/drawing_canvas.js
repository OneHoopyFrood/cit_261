/************************************
 *
 ***********************************/
window.addEventListener("load", function(){
  setupCanvas()
})

// Happy path (touch events)
function setupCanvas()
{
    var myCanvas = document.getElementById("myCanvas");

    var lastCoordinates = { x: 0, y: 0 };
    var context = myCanvas.getContext("2d"); // Try other strings

    // ontouchstart
    myCanvas.addEventListener("touchstart", function(event) {
        lastCoordinates.x = event.touches[0].pageX
        lastCoordinates.y = event.touches[0].pageY
    })

    // ontouchmove
    myCanvas.addEventListener("touchmove", function (event) {
        // prevent scrolling with finger touches
        event.preventDefault();

        // Log where you moved your finger to (x, y)
        var x = event.touches[0].pageX
        var y = event.touches[0].pageY

        // draw
        context.beginPath();
        context.strokeStyle = 'black';
        context.moveTo(lastCoordinates.x, lastCoordinates.y); // Move the canvas context to the last coordinates (where you finger was last)
        context.lineTo(x, y); // make the line connecting last connecton to your new coordinates
        // Set your last coordinates to remember where you finger was
        lastCoordinates.x = x;
        lastCoordinates.y = y;
        context.stroke(); // draw the line on the screen

        // Return false (only used by MS Internet Explorer
        return false;
    })
}
