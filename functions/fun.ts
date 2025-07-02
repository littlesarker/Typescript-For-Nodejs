
//  value returned by the function can be explicitly defined.
function getTime(): number {
  return new Date().getTime();
}

console.log(getTime());


//void return type 

function printHello() :void {
    console.log("Hello");
}


console.log(printHello());


//Parameters

function multiply(a: number,b:number){
    return a*b;
}

console.log(multiply(10,10));

// if no parameter type is defineded typescript will default to using any


// the ? operator used for optional parameter
function add (a:number ,b:number,c? :number){
   return a+b+(c || 0);
}


console.log(add(20,10,));

//default paramerters

function pow(v:number ,exponet:number=10){
    return v ** exponet;
}
console.log(pow(4,6));


//named parameters

function divide({dividend ,divisor}:{dividend:number,divisor:number}){
    return dividend/divisor;
}

console.log(divide( {dividend: 10,divisor:2}));


// Rest Parameters

function add2(a:number,b:number, ...rest:number[]){
  return a+b+rest.reduce((p,c)=> p+c,);
}

console.log(add2(10,10,10,10,10));