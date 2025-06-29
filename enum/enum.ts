/*
enums will initialize the first value to 0 and add 1 to each additional value
*/

enum CD{
    North,
    East,
    South,
    West
}

let cd=CD.East;

console.log(cd);
//log is 1 


/*
set the value of the first numeric enum and have it auto increment from that:
*/

enum D {
  North = 1,
  East,
  South,
  West
}
// logs 1
console.log(D.North);
// logs 4
console.log(D.West);

//numaric Enum
enum SC{
    notfoud=404,
    success=200,
    accepted=202,
    badRequest=400
}

console.log(SC.badRequest);
console.log(SC.accepted);


//String enum

enum Name{
    my="sarker",
    friend="Rifat"
}

console.log(Name.my);
console.log(Name.friend);