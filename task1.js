function customIsNaN(valueToValidate) {
    if (typeof valueToValidate === 'undefined'
        || valueToValidate.toString() === 'NaN'
        || ( typeof valueToValidate === 'string' &&valueToValidate.length > 0 )){
        console.log(true);
    }
    else if (typeof valueToValidate === 'number'
        || valueToValidate.length === 0) {
        console.log(false);
    }
}
 customIsNaN("NaN")


