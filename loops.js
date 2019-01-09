//for loop 
var array = [];

function forLoop(array) {
  for (let i = 0; i <= 25; i++) {
    if (i === 1) {
      return `I am 1 strange loop.`;
    } else {
      return `I am ${i} strange loops.`;
    }
  }
}



//while loop
function whileLoop (n) {
  let countdown = 100;
  
  while (countdown > 0) {
    return(--countdown);
  }
}

function doWhileLoop(array) {
  
}

// i think the above while loop is bad because it looks
//like it will go on forever.
