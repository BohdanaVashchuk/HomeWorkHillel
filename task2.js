function actionSelection(action, a, b) {
    switch(action) {
        case "+" :
           console.log(a + b);
            break;
        case "-" :
            console.log(a - b);
            break;
        case "*" :
            console.log(a * b);
            break;
        case "/" :
            console.log(a / b);
            break;
        default:
            console.log("Invalid value, try again");
            break;
    }
}

actionSelection("*", 23, 23)