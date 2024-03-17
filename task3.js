
function fibonacci(n) {
    let a = 0;
    let b = 1;
    let nextElement;
    if (n === 0) {
        return a;
    }
    for (let i = 2; i <= n; i++) {
        nextElement = a + b;
        a = b;
        b = nextElement;
    }
    return b;
}

console.log(fibonacci(4));