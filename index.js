let display = document.getElementById("display");
let out = document.getElementById("output");
let numbers = document.getElementsByClassName("num")
let buttons = document.getElementsByClassName("input")
let ops = document.getElementsByClassName("ops")
let firstNum;
let secondNum;
let f;
document.addEventListener("keydown", e => {
    let k = parseInt(e.keyCode);
    console.log(k);
    let t;
    let fk;
    if(firstNum == undefined || f == undefined){
        if((k >= 48 && k <= 57) || (k >= 96 && k<= 105)) {
            display.value = parseInt(display.value + e.key);
        }else if(k == 107 || k == 106 || k == 111 || k == 109){
            firstNum = parseInt(display.value);
            f = k
            display.value = 0
        }
    }else{
        if((k >= 48 && k <= 57) || (k >= 96 && k<= 105)) {
            display.value = parseInt(display.value + e.key);
        }else if(k == 13){
            secondNum = parseInt(display.value);
            switch(f) {
                case 107: t = add(firstNum,secondNum); fk = "+"; break;
                case 109: t = subtract(firstNum,secondNum); fk = "-"; break;
                case 106: t = multiply(firstNum,secondNum); fk = "*"; break;
                case 111: t = divide(firstNum,secondNum); fk = "/"; break
            }
            let total = document.createElement("div")
            total.textContent = `${firstNum} ${fk} ${secondNum} = ${t}`
            out.appendChild(total);
            firstNum = undefined;
            display.value = 0;
        
        }
    }
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
