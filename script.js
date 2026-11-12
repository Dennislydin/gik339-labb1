/* console.log(x)
console.log(y)
console.log(z) */

{
  /* Uppgift 2 */
  var x = 20;
  let y = 15;
  const z = 10;
  
  /* console.log(x)
  console.log(y)
  console.log(z) */
}
/* console.log(x)
console.log(y)
console.log(z) */ /* y och z ger ReferenceError innan och efter blocket. x blir undefined innan blocket, och 20 efter blocket. */

/* var kan ändras både innanför och utanför block,
let kan endast ändras inom befintliga blocket,
const kan aldrig ändras samt kan endast användas innanför blocket. */

/* Uppgift 3 */
/* const add = (num1, num2) => num1 + num2;
console.log(add(20, 10)); */

/* Ifall du hade användt let, så skulle du kunna ändra på hela funktionen, nu är funktionen konstant. 
let sub = (num1, num2) => num1 - num2;
console.log(sub(10,5)) sub blir 5
sub = 20;
console.log(sub) sub blir 20 */

/*
function add(num1, num2) {
  return num1 + num2;
};
const addValue = add(20, 10);
console.log(addValue);

return innebär att du returnerar ett värde, annars blir värdet undefined.
*/

/* Uppgift 4 */
const add = (num1, num2) => {
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);

  console.log(num1 ? "truthy" : "falsy");

  if (
    !(num1 === null || num1 === undefined || num2 === null || num2 === undefined) &&
    typeof num1 === "number" &&
    typeof num2 === "number"
  )
  {
    return num1 + num2;
  }
  else {
    return "Felaktig input";
  }
}

/* ternary operator är ett uttryck som returnerar ett värde, den fungerar som en kortare version av en if-sats. Kan användas i console.log() till skillnad från en if-sats.
== kollar ifall värdet är lika ("1" == 1), === kollar ifall det är exakt lika, samma datatyp och värde. ("1" !== 1)
if satsen kontrollerar att det inte är null genom att använda "!" (inte) framför en parantes med ett villkor att num1 och num2 ska "!" vara den precisa variabeln null. */

/* Uppgift 5 */
const num1 = 0;
let arg1;
let sum = false;

console.log(add(sum, 1)) /* Test 1 */
console.log("") // För lättare läsbarhet i konsolen.

console.log(add("0", 3)) /* Test 2 */
console.log("")

console.log(add(3, "num1")) /* Test 3 */
console.log("")

console.log(add(-5, num1)) /* Test 4 */
console.log("")

console.log(add(arg1, 7)) /* Test 5 */
console.log("")

console.log(add()) /* Test 6 */
console.log("")

console.log(num1)
console.log(sum)

/* Variabel är en namngiven behållare, t.ex en siffra, sträng eller en funktion. (const num1 = 0)
Parameter är en lokal variabel som förklarar vad som förväntas som indata. (i "const add = (num1, num2) => {...}" så är num1, och num2 parametrar.)
Argument är det faktiska värdet som skickas in till parametern. (add("0", 3) så är "0" och 3 argument) 

Allra sista värdet jag får i num1 är 0, då variabeln är satt till konstant och aldrig ändrades från deklareringen. Det som ändrades i varje test 
var funktionens argument num1 inte den yttre variabeln.

Test 1:
sum, som är false, och 1 skickas in som argument num1 och num2.
num1 (false (false == 0)) == 0. True, false == 0 så det är samma värde
num2 (1) === "0". False, olika datatyper och värden.
num2 (1) === 0. False, olika värden.
num1 (false) == NaN. False, NaN är aldrig lika med något annat.
num1 (false) ? "truthy" : "falsy". Falsy, false är ett falsy värde
i if satsen blir typeof num1 en bool, inte en number. Går in i else satsen och skickar ut "Felaktig input"

Test 2: 
"0" och 3 skickas in som argument.
num1 ("0") == 0. True, olika datatyper, men "==" kollar endast värdet som är lika. 
num2 (3) === "0". False, olika datatyper och värden.
num2 (3) === 0. False, olika värden
num1 ("0") == NaN. False, NaN är aldrig lika med något annat.
num1 ("0") ? "truthy" : "falsy". Truthy, en icke tom sträng, även "0" räknas som truthy.
i if satsen blir typeof num1 en string, inte en number. Går in i else satsen och skickar ut "Felaktig input"

Test 3:
3 och "num1" skickas in som argument.
num1 (3) == 0. False, olika värden.
num2 ("num1") === "0". False, samma datatyp men olika värden.
num2 ("num1") === 0. False, olika datatyper och värden
num1 (3) == NaN. False.
num1 (3) ? "truthy" : "falsy". Truthy, 3 är ett annat tal än 0.
i if satsen blir typeof num2 en string, inte en number.

Test 4:
-5 och num1, som är 0 skickas in som argument.
num1 (-5) == 0. False, olika värden.
num2 (0) === "0". False, samma värde men olika datatyper.
num2 (0) === 0.  True, samma värde och datatyp.
num1 (-5) == NaN. False.
num1 (-5) ? "truthy" : "falsy". Truthy, -5 är ett annat tal än 0. 
i if satsen går den genom alla villkor och summerar -5 och 0, vilket blir -5.

Test 5:
arg1 (inget värde = undefined) och 7 skickas in som argument.
num1 (undefined) == 0. False, undefined == undefined/null. 
num2 (7) === "0". False, olika värden.
num2 (7) === 0. False, olika värden.
num1 (undefined) == NaN. False.
num1 (undefined) ? "truthy" : "falsy". Falsy, undefined är alltid falsy.
i if satsen är num1 === undefined, dessutom felaktig typ så den går ur if satsen och skickar ut "Felaktig input"

Test 6:
Inga argument skickas in. Alltså blir både num1 och num2 undefined.
num1 (undefined) == 0. False
num2 (undefined) === "0". False
num2 (undefined) === 0. False
num1 (undefined) == NaN. False 
num1 (undefined) ? "truthy" : "falsy". Falsy 
i if satsen är num1 och num2 === undefined och felaktig typ. Skickas till else satsen och skriver ut "Felaktig input"
*/