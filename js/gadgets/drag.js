//Drag'n'Drop *********************************************************************************
var container = Array.from(document.getElementsByClassName('container'))
  , zindex_increment = 0;

var move = function (event) {
    var posX = event.pageX;
    var posY = event.pageY;
    this.style.position = "absolute";
    this.style.top = posY - (this.offsetHeight / 2) + "px";
    this.style.left = posX - (this.offsetWidth / 2) + "px";
}

container.forEach(function(item) {
    item.addEventListener('mousedown', function () {
        zindex_increment ++;
        item.style.zIndex = zindex_increment;
        console.log(item);
        item.addEventListener('mousemove', move);
    });
    item.addEventListener('mouseup', function () {
        console.log(item);
        item.removeEventListener('mousemove', move);
   });
});
