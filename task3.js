

function ternar(valueToVerify) {
    if (typeof valueToVerify === 'number' ){
        let remainderFromDivision = valueToVerify % 2;
        let count = remainderFromDivision === 0 ? 'Your number is an integer' : 'Your number is not an integer'
        console.log(count)
    } else {
        console.log('Your value incorrect, we work only with number')
    }


}

ternar(767)