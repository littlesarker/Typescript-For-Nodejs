
let namber:number[]=[1,2,4];

let letter:String[]=["A","B","C"];

let numbers: Array<number> = [1, 2, 3, 4];
let names: Array<string> = ["Alice", "Bob", "Charlie"];


for (let num of namber){
    console.log(num);
}



// Array of Objects

type User={
    id:number;
    name:String;
}  

let users:User[]=[
    {id:1,name:"sarker"},
    {id:2,name:"type"},
];

for(let i of users){
    console.log(i);
}