let display = document.getElementById("display").textContent;
let numbers = document.getElementsByClassName("num")
let buttons = document.getElementsByClassName("input")
let ops = document.getElementsByClassName("ops")

document.addEventListener("keypress", k => {
    let kcode = k.keyCode;
    console.log(k.key);
    if(kcode >= 48 && kcode <= 57) {
        display += k.key;
    }
    console.log(display);
    return display;
})

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function divide(a, b) {
    return a/b;
}

function multiply(a,b) {
    return a * b;
}

function operate(op, a, b) {
    if(op == "multiply") {
        multiply(a,b);
    }else if(op == "divide") {
        divide(a,b);
    }else if(op == "sub") {
        subtract(a,b);
    }else if(op == "add") {
        add(a,b);
    }
}
