/*
enums will initialize the first value to 0 and add 1 to each additional value
*/
var CD;
(function (CD) {
    CD[CD["North"] = 0] = "North";
    CD[CD["East"] = 1] = "East";
    CD[CD["South"] = 2] = "South";
    CD[CD["West"] = 3] = "West";
})(CD || (CD = {}));
var cd = CD.East;
console.log(cd);
//log is 1 
/*
set the value of the first numeric enum and have it auto increment from that:
*/
var D;
(function (D) {
    D[D["North"] = 1] = "North";
    D[D["East"] = 2] = "East";
    D[D["South"] = 3] = "South";
    D[D["West"] = 4] = "West";
})(D || (D = {}));
// logs 1
console.log(D.North);
// logs 4
console.log(D.West);
//numaric Enum
var SC;
(function (SC) {
    SC[SC["notfoud"] = 404] = "notfoud";
    SC[SC["success"] = 200] = "success";
    SC[SC["accepted"] = 202] = "accepted";
    SC[SC["badRequest"] = 400] = "badRequest";
})(SC || (SC = {}));
console.log(SC.badRequest);
console.log(SC.accepted);
//String enum
var Name;
(function (Name) {
    Name["my"] = "sarker";
    Name["friend"] = "Rifat";
})(Name || (Name = {}));
console.log(Name.my);
console.log(Name.friend);
