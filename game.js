var score = 0;
var move = 0;
var randomdur = 1;
document.addEventListener("keydown", function(e) {
  var ringoX = Math.floor((Math.random() * 850) + 0);
  var ringo1X = Math.floor((Math.random() * 850) + 0);
  var slurpyX = Math.floor((Math.random() * 850) + 0);
  var slurpyY = Math.floor((Math.random() * 600) + 0);
  var loc = Number(document.getElementById("sonic").getAttribute("x"));
  var loc2 = Number(document.getElementById("sonic").getAttribute("y"));
  var rangX = Number(document.getElementById("rang").getAttribute("x"));
  var rangY = Number(document.getElementById("rang").getAttribute("y"));
  var slurpX = Number(document.getElementById("slurp").getAttribute("x"));
  var slurpY = Number(document.getElementById("slurp").getAttribute("y"));
  var rangTX = Number(document.getElementById("rang1").getAttribute("x"));
  var rangTY = Number(document.getElementById("rang1").getAttribute("y"));
  if (e.keyCode == 37) {
    loc -= 37;
    var ba = document.getElementById("sonic");
    ba.setAttribute("x", loc)
    move += 1;
  }
  if (e.keyCode == 39) {
    loc += 37;
    var ba = document.getElementById("sonic");
    ba.setAttribute("x", loc)
    move += 1;
  }
  if (e.keyCode == 38) {
    loc2 -= 37;
    var ba = document.getElementById("sonic");
    ba.setAttribute("y", loc2)
    move += 1;
  }
  if (e.keyCode == 40) {
    loc2 += 37;
    var ba = document.getElementById("sonic");
    ba.setAttribute("y", loc2)
    move += 1;
  }
  if(loc >= rangX-125 && loc <= rangX+125 && loc2 >= rangY-125 && loc2 <= rangY+125 ){
    document.getElementById("rang").setAttribute("x", ringoX)
    randomdur *=0.9;
    document.getElementById("snack").setAttribute("dur", randomdur)
    document.getElementById("cm").setAttribute("dur", randomdur)
    score += 1;
  }
  if(loc >= rangTX-125 && loc <= rangTX+125 && loc2 >= rangTY-125 && loc2 <= rangTY+125 ){
    score += 1;
    document.getElementById("rang1").setAttribute("x", ringo1X)
    randomdur *=0.9;
    document.getElementById("snack1").setAttribute("dur", randomdur)
    document.getElementById("cm1").setAttribute("dur", randomdur)
    score += 1;
  }
  if(loc >= slurpX-125 && loc <= slurpX+125 && loc2 >= slurpY-125 && loc2 <= slurpY+125 ){
    document.getElementById("slurp").setAttribute("x", slurpyX)
    document.getElementById("slurp").setAttribute("y", slurpyY)
    randomdur*=0.9;
    document.getElementById("slurp").setAttribute("dur", randomdur)
    score += 1;

    if(move > 5){
      document.getElementById("svg").pauseAnimations();
      var timeStop = Date.now();
      var timeDuration = timeStop - timeStart;
      timeDuration=timeDuration/1000;
      document.getElementById("totaltime").textContent;
    }
  }

var x = document.getElementById("meme");

x.textContent = "Score: ";
x.textContent += score;
})
