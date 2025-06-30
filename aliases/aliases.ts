type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "BUGATI"
const carModel: CarModel = "2025"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

console.log(car);


/*
Interfaces are similar to type aliases, except they only apply to object types
*/

interface Rect{
    height:number,
    width:number
}

const rect:Rect ={
    height:20,
    width:40
}

console.log(rect);