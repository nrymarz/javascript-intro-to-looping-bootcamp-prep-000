function forLoop(arr){
  for(let i = 1;i < 25; i++){
    if(i===1){
      arr.push("I am 1 strange loop.");
    }
    else{arr.push(`I am ${i} strange loops.`);
    }
  }
}
var newarr = [];
forLoop(newarr);
console.log(newarr[15]);
