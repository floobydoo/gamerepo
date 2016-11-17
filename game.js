
document.addEventListener("keydown", function(e) {
  var loc = Number(document.getElementById("sonic").getAttribute("x"));
  var loc2 = Number(document.getElementById("sonic").getAttribute("y"));
  var score = 0;
  var rangX = Number(document.getElementById("rang").getAttribute("x"));
  var rangY = Number(document.getElementById("rang").getAttribute("y"));
  if (e.keyCode == 37) {
    loc -= 37;
    var ba = document.getElementById("sonic");
    ba.setAttribute("x", loc)
  }
  if (e.keyCode == 39) {
    loc += 37;
    var ba = document.getElementById("sonic");
    ba.setAttribute("x", loc)
  }
  if (e.keyCode == 38) {
    loc2 -= 37;
    var ba = document.getElementById("sonic");
    ba.setAttribute("y", loc2)
  }
  if (e.keyCode == 40) {
    loc2 += 37;
    var ba = document.getElementById("sonic");
    ba.setAttribute("y", loc2)
  }
  if(loc >= rangX-75 && loc <= rangX+75 && loc2 >= rangY-75 && loc2 <= rangY+75 ){
    //onionRing2Speed *= 0.9;
    document.getElementById("rang").setAttribute("x",100);
    console.log("EatAsshole")
    score + 1;
        //document.getElementById("rang").setAttribute("dur",onionRing2Speed);
  }
})
