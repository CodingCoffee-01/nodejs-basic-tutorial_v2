function printHello() {
   console.log( "Hello, World!");
}

// Now call above function after 2 seconds
var t = setTimeout(printHello, 200);

// Now clear the timer
clearTimeout(t);
