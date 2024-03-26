function addNumbersNotMultiplesOf3() {
    let sumOfNumbers = 0;
    for ( let i = 1; i <= 100; i++) {
        if (i % 3 !== 0) {
            sumOfNumbers += 1;
        }
    }
   console.log("The result is " + sumOfNumbers)
}
addNumbersNotMultiplesOf3();