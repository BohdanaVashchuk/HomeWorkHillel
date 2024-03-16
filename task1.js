
function studentRating(valuation) {
    if (valuation >= 90 && valuation <= 100) {
        console.log("Excellent");
    } else if (valuation >= 70 && valuation <= 89) {
        console.log("Good");
    } else if (valuation >= 50 && valuation <= 69) {
        console.log("Satisfactory");
    } else if (valuation >= 1 && valuation <= 49) {
        console.log("Unsatisfactory");
    } else {
        console.log("Incorrect value, you can do better");
    }
}
//Check if it works
studentRating("refger");
