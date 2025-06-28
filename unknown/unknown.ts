/*
  its unknown and aslo no type  
*/

let rs:unknown;

rs="Test";
rs=100;
rs=true;

console.log(rs);


if (typeof rs === "number") {
  console.log(rs.toFixed(2)); // ✅ Now it's safe
}