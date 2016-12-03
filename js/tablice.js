'use strict' ;

var liczba1 = 50;

var kolory = [ 'żółty', 'pomarańczowy', 'łosiosowy'];

kolory[3] = "czarny";

kolory.push("czerwony");

kolory.pop();

var DlugoscTablicy;
var UniwersalnaZmienna;
DlugoscTablicy = kolory.unshift("zielony");

kolory.shift();

console.log(kolory.length);
console.log (kolory);

for (var i=0; i<kolory.length; ++i) {
	console.log(i);
	console.log (kolory[i]);
}

kolory.forEach( function( Element, iteration)  {													console.log("Numer koloru " + iteration + " " + Element)
})

var p1 = kolory.join ();
console.log(p1);

DlugoscTablicy = kolory.reverse();

console.log (DlugoscTablicy);

UniwersalnaZmienna = kolory.sort();

console.log (UniwersalnaZmienna);



var koloryAny = ['niebieski', 'różowy', 'lazurowy', 'bialy'];

console.log (koloryAny.concat(kolory));

UniwersalnaZmienna = koloryAny.indexOf("niebieski");

console.log (UniwersalnaZmienna);

if (Array.isArray(liczba1)) {
	console.log ("jest");
}	else {
	console.log("nie jest");
}

koloryAny.splice(2,2, "brązowy", "złoty");

console.log (koloryAny.toString());

