let display = document.getElementById("display");
let numbers = document.getElementsByClassName("input")
let ops = document.getElementsByClassName("ops")
let firstNum;
let secondNum;
let f;
for(let i = 0; i < 16; i++) {
    let b = 0
    let t = display.value.length;
    let button = document.getElementById(`${i}`)
    button.addEventListener("click", e => {
        if(button.value != "=") {changeDisplay(button)
        }else{total(display.value)}
    })
}
function changeDisplay(b) {
    if(display.value == 0) {
        display.value = b.value;
    }else{
        display.value = display.value + b.value;
    }
}

function total(string) {
    let all = /[\*\/\+\-]/
    let m = /\*/
    let d = /\//
    let a = /\+/
    let s = /\-/
    if(!all.test(string)) {
        display.value = parseInt(display.value)
    }
    else if(string.search(all)) {
        if(m.test(string)) {
            let num = string.split(m)
            console.log(num);
            display.value = operate("multiply", num[0], num[1]);
        }else if(d.test(string)) {
            let num = string.split(d)
            console.log(num);
            display.value = operate("divide", num[0], num[1])
        }else if(a.test(string)) {
            let num = string.split(a)
            console.log(num);
            display.value = operate("add", num[0], num[1]);
        }else{
            let num = string.split(s)
            console.log(num);
            display.value = operate("subtract", num[0], num[1])
        }
    }
}

function clear() {
    let firstNum;
    let secondNum;
    let f;
    b = 0;
    display.value = 0;
}
let clearButton = document.getElementById('16');
clearButton.addEventListener('click', clear);

function add(a,b) {
    return parseInt(a) + parseInt(b);
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
    switch(op){
        case "add": return add(a,b);
        case "subtract": return subtract(a,b);
        case "divide": return divide(a,b);
        case "multiply": return multiply(a,b);
    }
}