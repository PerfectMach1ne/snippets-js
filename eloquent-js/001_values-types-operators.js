console.log((100 + 4) * 11)

console.log(Infinity)
console.log(-Infinity)
console.log(Infinity - Infinity)
console.log(Infinity - 1)
console.log(Infinity * Infinity)
console.log(0 / 0)
console.log(1 / 0)
console.log(Infinity % Infinity)
console.log(Infinity + Infinity)
console.log(Infinity / Infinity)
console.log(Infinity + NaN)
console.log(NaN / 0)
// Spanning lines of a string with backtick thingies
console.log(`backt
tick
strin
g
with newlines`)
console.log("A newline chara" + "cter is written " + "like \"\\n\".")  // Concatenate example too
// JS uses Unicode for strings and all that
console.log(`my fave feature ever: 2 + 2 = ${2 + 2}`) // string/template literals

console.log(typeof 4.5) // number
console.log(typeof "x") // string
console.log(typeof 57) // number
console.log(typeof Infinity) // number
console.log(typeof 0.0) // number
console.log(typeof NaN) // number
console.log(typeof console) // object
console.log(typeof console.log) // function
console.log(typeof `${2+2}`) // string (yes, I expected it to be string when I was typing this. I am not that "goofy", don't worry.)
console.log(typeof 'c') // string (I had doubts whether this would be string or some kinda C-looking char though lol)

console.log(3 > 2)
// → true
console.log(3 < 2)
// → false
console.log(typeof 3 > 2) // ...false?!
console.log(typeof 3 < 2) // ..false?
console.log(typeof (3 > 2)) // boolean (successfully unfucky-wucked)
console.log(typeof (3 < 2)) // boolean too :thumb up emote:
// man I am growing to love this silly language almost as much as C

/* "uppercase letters are always “less” than lowercase ones, so "Z" < "a", 
and nonalphabetic characters (!, -, and so on) are also included in the ordering. 
When comparing strings, JavaScript goes over the characters from left to right,
comparing the Unicode codes one by one." 
https://eloquentjavascript.net/01_values.html#p_No3uOP/bY2 */
console.log("Aardvark" < "Zoroaster")
// → true
console.log("Itchy" != "Scratchy")
// → true
console.log("sus" == "sas")
console.log("sus" == "sus")
// console.log("sus" = "sas") // hehe node & language is still too smart to let this one pass
console.log(NaN == NaN)
// → false

console.log(true && false)
// → false
console.log(true && true)
// → true

console.log(false || true)
// → true
console.log(false || false)
// → false

console.log(1 + 1 == 2 && 10 * 10 > 50) // let's see if i can guess the value of this...
// (1 + 1 == 2 && 10 * 10 > 50) = (2 == 2 && 100 > 50) = true && true = true!
// yep i was right

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

console.log(typeof null)
console.log(typeof undefined)
console.log(null + undefined) // Of course it's a NaN
console.log(null + null) // ...0? bruh
console.log(undefined + undefined) // NaN now
console.log(0 + null) // 0
console.log(null + 0) // 0
console.log(null) // null
// apparently null and undefined are "mostly interchangeable" but well, just look above.
// Either way I assume all mean you or the code fucked something up, in the order of fuckupedness as follows:
// null < undefined < NaN < getting a whole error

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

console.log("5" + 7) // HEH

console.log(null == undefined);
// → true
console.log(null == 0);
// → false
/* when null or undefined occurs on either side of the operator,
 it produces true only if both sides are one of null or undefined.
 That behavior is often useful. When you want to test whether a value
 has a real value instead of null or undefined, you can compare it
 to null with the == (or !=) operator. */

console.log(0 == false)
console.log("" == false)
console.log(0 === false)
console.log("" !== false)
console.log(null === undefined)
console.log(NaN === NaN)

// Short-circuiting of logical operators
// https://eloquentjavascript.net/01_values.html#p_CFbagJsQYK
/* The || operator, for example, will return the value to its left when that can be converted to true and
 will return the value on its right otherwise. */
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
/* The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("")
 count as false, while all the other values count as true. */

/* The && operator works similarly but the other way around. When the value to its left is something that converts 
 to false, it returns that value, and otherwise it returns the value on its right. */

/* Another important property of these two operators is that the part to their right is evaluated only when
 necessary. In the case of true || X, no matter what X is—even if it’s a piece of program that does something
 terrible—the result will be true, and X is never evaluated. The same goes for false && X, which is false and
 will ignore X. This is called short-circuit evaluation. */
console.log(1 && "byeee wooorl")
