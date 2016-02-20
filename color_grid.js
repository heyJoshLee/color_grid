(function(){
  var counter = 0,
    frozenSqares = [], // squares can't be changed for 2 seconds
    squares = document.getElementsByClassName("square"),
    randomIdx;


  function lightSquare() {
    // 2 seconds have passed, remove first allow first square to be colored back in
    // after this fires the first time, each 'loop' should unfreeze another square
    if (counter >= 8) { frozenSqares.shift(); }

    var color = "rgb(" + Math.floor(Math.random() * 255) + "," +
                         Math.floor(Math.random() * 255) + "," +
                         Math.floor(Math.random() * 255)  + ")";

    do {
      generateRandom();
    } while(frozenSqares.indexOf(randomIdx) != -1);

    squares[randomIdx].style.backgroundColor = color;
    frozenSqares.push(randomIdx);
    counter++
  }

  function generateRandom() {
    randomIdx = Math.floor(Math.random() * squares.length);
  }

  setInterval(lightSquare, 250);
})();
