function main(input){
  const lines = input.split('\n');
  const n = parseInt(lines[0].split(' ')[0], 10);
  const N = parseInt(lines[0].split(' ')[1], 10);

  const A = lines[1].split(' ').map(val => parseInt(val, 10));
  const minA = A.reduce((a, b) => a < b ? a : b);
  const maxA = A.reduce((a, b) => a > b ? a : b);
  if (minA <= N && maxA >= N){
    console.log('Yes');
  }else{
    console.log('No');
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));