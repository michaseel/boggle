var fieldsize = 4;
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



var worker = new Worker('worker.js');

worker.addEventListener('message', function(e) {
  container.innerHTML = e.data;
  setRemBase();
}, false);

worker.postMessage(fieldSizeInput.value);

boggleBtn.addEventListener('click', function() {
  fieldsize = fieldSizeInput.value;
  worker.postMessage(fieldsize);
});
