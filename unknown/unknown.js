/*
  its unknown and aslo no type
*/
var rs;
rs = "Test";
rs = 100;
rs = true;
console.log(rs);
if (typeof rs === "number") {
    console.log(rs.toFixed(2)); // ✅ Now it's safe
}
