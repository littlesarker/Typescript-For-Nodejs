const car : { type: string ,model:string,year:number} ={
    type:"Car",
    model:"CHR",
    year:2025
};

console.log(car);

//with optional property

const human:{type : string,old?:number}={
   type:"Asian"
}
human.old=60;

console.log(human);