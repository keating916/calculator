let display = document.getElementById("display");
let numbers = document.getElementsByClassName("input")
let ops = document.getElementsByClassName("ops")
let firstNum;
let secondNum;
let f;
for(let i = 0; i < 16; i++) {
    let b = 0
    let t = display.value.length;
    let num = document.getElementById(`${i}`)
    num.addEventListener("click", e => {
        if(b == 1) {
            clear();
        }
        if(num.value == "+" || num.value == "-" || num.value == "*" || num.value == "/"){
            firstNum = parseInt(display.value);
            switch(num.value) {
                case "+": f = "add"; break;
                case "-": f = "subtract"; break;
                case "*": f = "multiply"; break;
                case "/": f = "divide"; break;
            };
            display.value = display.value + num.value;
            t = display.value.length
            console.log(t);
        }
        else if(display.value == 0) {
            display.value = num.value;
        }else if(num.value == "="){
            let secondNum = display.value.split("")
            t = display.value.length
            console.log(t);
            secondNum = secondNum.slice(t-1)
            console.log(secondNum)
            secondNum = parseInt(secondNum.join(""));
            console.log(firstNum,f,secondNum)
            display.value = operate(f,firstNum,secondNum);
            b = 1;
        }else{
            display.value = display.value + num.value;
        }
    })
}
function clear() {
    let firstNum;
    let secondNum;
    let f;
    b = 0;
    display.value = 0;
}
let clearButton = document.getElementById('16');
clearButton.addEventListener('click', clear());

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
    switch(op){
        case "add": return add(a,b);
        case "subtract": return subtract(a,b);
        case "divide": return divide(a,b);
        case "multiply": return multiply(a,b);
    }
}
//work in progress
/*document.addEventListener("keydown", e => {
    let k = parseInt(e.keyCode);
    console.log(k);
    let t;
    let fk;
    go()
    function go () {
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
            display.value = t;
            go()
        }
    }}
})*/