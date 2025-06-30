
/*
Union types are used when a value can be more than a single type.

Such as when a property would be string or number
*/

function statusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}

statusCode(500);
statusCode(403);
