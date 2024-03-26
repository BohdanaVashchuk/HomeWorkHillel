function checkProbabilityTheory(count) {
    let evenNumbers = 0;
    let oddNumbers = 0;

    if (count <= 0 && count >= 1000 || typeof count !== "number"){
        console.log("Only numbers in the range from 100 to 1000 can be entered")
    } else {
        for (let  i = 0; i < count; i++) {
            let randomNumber = Math.floor(Math.random() * 901) + 100;
            if (randomNumber % 2 === 0) {
                evenNumbers++;
            } else {
                oddNumbers++;
            }

        }
        let evenPercentage = (evenNumbers / count) * 100;
        let evenPercentageToFixedCount = evenPercentage.toFixed(2)
        let oddPercentage = (oddNumbers / count) * 100;
        let oddPercentageToFixedCount = oddPercentage.toFixed(2)

        console.log("Кількість згенерованих чисел:" + count);
        console.log("Парних чисел:" + evenNumbers);
        console.log("Непарних чисел:" + oddNumbers);
        console.log("Відсоток парних до непарних:", evenPercentageToFixedCount + "% - ", oddPercentageToFixedCount + "%");
    }
}

// checkProbabilityTheory(45);
// checkProbabilityTheory("erferf");
checkProbabilityTheory(undefined);