

function getTriangleArea(a, h) {
  if (a> 0) {
    if( h> 0) {
      var trangle= a*h/2;
      return trangle;
    }
  } else {
    console.log('wynik nieprawidłowy');
  }
}
console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(6, 5);
var triangle2Area = getTriangleArea(5, 20);
var triangle3Area = getTriangleArea(3, 4);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
