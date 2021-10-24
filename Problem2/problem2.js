function minusOne(a, b, c){
  if ((b > a && a > c) || (c > a && a > b)
      || (b > c && c > a) || (a > c && c > b)){
    console.log(0)
  }else if ((a === 1 && b < 3) || (c === 1 && b < 3) || (a === 2 && b === 2 && c === 2)){
    console.log(-1)
  }else if(a === b && b === c){
    console.log(3)
  }else{
    let numArray = [a, b, c];
    numArray.sort((a, b) => {
      if (a < b){
        return -1;
      } else if (a > b){
        return 1;
      } else {
        return 0;
      }
    });
    console.log(numArray)
    if (numArray[0] === 1){
      console.log(numArray[2] - numArray[1])
    }else{
      console.log(Math.min(numArray[2] - numArray[1] + 1, numArray[1] - numArray[0] + 1))
    }
  }
}

function main(input){
  const lines = input.split('\n');
  const T = parseInt(lines[0], 10);
  for (let i = 0; i < T; i++){
    let a = parseInt(lines[i+1].split(' ')[0], 10)
    let b = parseInt(lines[i+1].split(' ')[1], 10)
    let c = parseInt(lines[i+1].split(' ')[2], 10)
    minusOne(a, b, c);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));