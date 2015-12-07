console.time('My time #1');
var fieldsize = 4;
var fieldlength = fieldsize * fieldsize;
var letterList = [];
var letters = {
  E: 150,
  N: 90,
  I: 75,
  S: 72,
  R: 70,
  A: 65,
  T: 61,
  D: 50,
  H: 47,
  U: 43,
  L: 34,
  C: 30,
  G: 30,
  M: 25,
  O: 25,
  B: 18,
  W: 18,
  F: 16,
  K: 14,
  Z: 14,
  P: 12,
  V: 11,
  ß: 7,
  J: 8,
  Y: 7,
  X: 6,
  Q: 5
};

var container = document.querySelector('#container');
var boggleBtn = document.querySelector('#boggle');
var fieldSizeInput = document.querySelector('#fieldSize');

function setRemBase() {
  var minSize = Math.min(window.innerWidth, window.innerHeight);
  var remBase = minSize / fieldsize / 12;
  var root = document.querySelector(":root");
  root.style.fontSize = remBase + "px";
}
setRemBase();
window.addEventListener('resize', setRemBase);

function generateLetterList() {
  for (var key in letters) {
    if (letters.hasOwnProperty(key)) {
      var num = letters[key];
      for (var i = 0; i < num; i++) letterList.push(key);
    }
  }
}
generateLetterList();

function generateGrid() {
  var output = '';

  for (var i = 1; i <= fieldsize; i++) {
    output += '<div class="row">';
    for (var k = 0; k < fieldsize; k++) {
      var rand = Math.round(Math.random() * (letterList.length - 1));
      output += '<div class="dice">' + letterList[rand] + '</div>';
    }
    output += '</div>';
  }
  container.innerHTML = output;
  console.timeEnd('My time #1'); //My time #1: 0.003ms
  setRemBase();
};
generateGrid();

boggleBtn.addEventListener('click', generateGrid);
fieldSizeInput.addEventListener('change', function() {
  fieldsize = fieldSizeInput.value;
});
//document.write('<pre>' + JSON.stringify(dices, null, ' ') + '</pre><br><br>');
