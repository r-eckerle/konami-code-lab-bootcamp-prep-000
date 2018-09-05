const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var index = 0

function init() {
  // your code here
  var body = document.querySelector('body')
  
  body.addEventListener('keydown', (e) => {
    const key = e.key;
    
    if(key === codes[index]) {
      index++
      
      if(index === codes.length - 1) {
        alert("HURRAY!")
        index = 0
      }
    } else {
      index = 0
    }
  });
}