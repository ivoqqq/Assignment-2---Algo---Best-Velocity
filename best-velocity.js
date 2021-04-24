let input = [11, 14, 10, 12]
// let input = [12, 9, 1, 5, 11, 5]
// let input = [76, 80]
// let input = [76, 80, 81, 77, 83, 78, 80]

function bestVelocity(input){

  if( input.length < 3 ){
    throw Error("sprints must be not less than 3")
  }
  
  let best = {
    sequence: 0,
    sum: 0
  }
  
  for ( let i = 0; i < input.length - 2; i++ ){

    let currentSequence = input.slice(i, i + 3);
    let currentSum = currentSequence.reduce((sum, el) => sum + el);
    
    if( best.sum <= currentSum ){
      best.sequence = currentSequence;
      best.sum = currentSum;      
    }
    
  }
  console.log(best);
}
bestVelocity(input)
