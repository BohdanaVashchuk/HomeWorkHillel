function convertCurrency(sum, currency) {
    if (currency === 'EUR'){
        let check1 = sum * 0.9
        console.log("Your money is counted in EUR and that's all you have: " + check1)
    }else if (currency === 'UAH'){
        let check1 = sum * 35
        console.log("Your money is counted in EUR and that's all you have: " + check1)
    }else if (currency === 'GBP'){
        let check1 = sum * 0.8
        console.log("Your money is counted in EUR and that's all you have: " +check1)
    }else{
        console.log("No currency is found")
    }
}
convertCurrency(543, "UAH")