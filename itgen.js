function addNumbers(){
    let n=0;
    return{
    next: function(){
        n += 10;
        return {value:n,  done:false};
    }
};
}
const nIterators = addNumbers();
for(let i=0; i<5; i++){
    const answer =nIterators.next();
    console.log(answer.value);
}

function* countGenerator() {
    let count = 1;
    while (true) {
      yield count;
      count+=10;
    }
  }
  
  const counter = countGenerator();
  console.log("Generator Function:")
  console.log(counter.next().value); 
  console.log(counter.next().value); 
  console.log(counter.next().done); 
  console.log(counter.next().value); 
  console.log(counter.next().value); 
  
  
  