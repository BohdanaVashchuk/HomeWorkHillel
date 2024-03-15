let test1 = 'number' + 3 + 3
console.log(test1)
//The first one is a string value, so concatenation is applied for all of them, the result is number33

let test2 = null + 3
console.log(test2)
//null is equal to 0 so this is why result is 3

let test3 = 5 && "qwerty"
console.log(test3)
//the && is the same as if condition. 5 is determinated as true by JS
// So, it means that the second value will be returned in case if the first one is true.

let test4 = +'40' + +'2' + "hillel";
console.log(test4)
//'Js завжди намагається привести все до числа.' So, value '40' string is converted into number 40,
// 2 is also converted into 2, then 40 + 2 + "hillel" = 42hillel. Hillel value is string and can not be converted into number, so concatenation is applied

let test5 = '10' - 5 === 6;
console.log(test5)
// '10' - 5 === 6;
//'Оператор строгої рівності (===): порівнює два значення на рівність як за значенням, так і за типом даних.
// Повертає true, якщо значення рівні і мають однаковий тип, і false - якщо вони різні.'
//So, '10' is converted to number 10, and 10 - 5 = 5, 5 === 6 - result is false

let test6 = true + false;
console.log(test6)
// boolean values can be converted into numbers. So, true is 1 and false is 0, so 1 + 0 = 1

let test7 = '4px' - 3;
console.log(test7)
// '4px' value is string which can not be converted into number, with - concatenation doesn`t work so result is NaN

let test8 = '4' - 3;
console.log(test8)
// '4' can be converted into number data type, So easy-peasy, the result is 4 - 1 = 1

let test9 = '6' + 3 ** 0;
console.log(test9)
// The result is 61
// зведення в ступінь (**) -so 3 ** 0 = 1, so '6' is string and 1 is number and in this case concatenation is applied.

let test10 = 12 / '6';
console.log(test10)
// '6' is converted into number data type, the result is 2. 12 / 6 = 2

let test11 = '10' + (5 === 6);
console.log(test11)
// The result is 10false. 5 is not equal 6 so false is returned. '10' + false = 10false, concatenation is applied.

let test12 =  3 ** (9 / 3);
console.log(test12)
// The result is 27. (**) denotes exponentiation. Division is performed first, so 9/3 equals 3. Then 3 ** 3 equals 27.

let test13 =  !!'false' == !!'true';
console.log(test13)
//Result is true. True and False are strings, so each string with value(not empty) returns true, and then true == true gives the result true

let test14 =  0 || '0' && 1;
console.log(test14)
// Result is 1
// 0 || '0' returns the first found true or the second value if first is false, in this case it is '0' as 0 number is false, but not-empty string is true
// '0' && 1 returns the first found false or the second value if first is true, in this case fist value is true, so the second is returned

let test15 =  (+null == false) < 1;
console.log(test15)
//the result is false.
// + converts value to numbers, so null is 0 and 0 is false.
// Then false == false we get true,
// And 1 is true, and 1 is not less than 1 so result false.

let test16 =  false && true || true;
console.log(test16)
//Result is true
// false && true - returns the first found false or the second value if first is true. So, here we get false
// Then false || true; returns the first found true or the second value if first is false.

let test17 =   false && (false || true);
 console.log(test17)
//The result is False
//false || true returns the first found true or the second value if first is false. Here we get true
//false && true - returns the first found false or the second value if first is true. So, here we get false

let test18 = (+null == false) < 1 ** 5;
console.log(test18)
// The result is false
// + + converts value to numbers, so null is 0 and 0 is false.
// false == false or the second false = 0. So, result the same we get true in the fist part.
//1 ** 5 = 1
//Then we have true < 1
//true is 1, and 1 is not less than 1 so result false.
