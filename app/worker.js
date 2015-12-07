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

function generateLetterList() {
  for (var key in letters) {
    if (letters.hasOwnProperty(key)) {
      var num = letters[key];
      for (var i = 0; i < num; i++) {
        letterList.push(key);
      }
    }
  }
}
generateLetterList();

function generateGrid(fieldsize) {
  var output = '';

  for (var i = 1; i <= fieldsize; i++) {
    output += '<div class="row">';
    for (var k = 0; k < fieldsize; k++) {
      var rand = Math.round(Math.random() * (letterList.length - 1));
      output += '<div class="dice">' + letterList[rand] + '</div>';
    }
    output += '</div>';
  }
  return output;
};

self.addEventListener('message', function(e) {

  self.postMessage(generateGrid(e.data));
}, false);
