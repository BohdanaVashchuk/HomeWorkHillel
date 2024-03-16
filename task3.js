

function ternar(a) {
    if (typeof a === 'number' ){
        let b = 2;
        let c = a % b;
        let count = c === 0 ? 'Your number is an integer' : 'Your number is not an integer'
        console.log(count)
    } else {
        console.log('Your value incorrect, we work only with number')
    }


}

ternar(767)