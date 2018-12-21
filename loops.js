//for loop 
function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      console.log(`I am ` + i + ` strange loop.`);
    } else {
      console.log(`I am ` + i + ` strange loops.`);
    }
  }
  return array;
}

//while loop
function whileLoop (n) {
  let countdown = 100;
  
  while (countdown > 0) {
    let countdown = 10;
    console.log(--countdown);
  }
}
// i think the above while loop is bad because it looks
//like it will go on forever.