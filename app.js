console.log("Hello World");
let buffer = '0'
let runningTotal = 0
let previousOperator;
const screen = document.querySelector('.screen')

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value)
    }
    else {
        handleNumber(value)
    }
    // console.log(value);
    reRender()

}
function handleSymbol(symbol) {
    // console.log('symbol');
    switch (symbol) {
        case 'C':
            buffer = '0';
            break;
        case '=':
            // console.log("equals");
            if (previousOperator === null){
                return;
            }
            flushOperation(parseInt(buffer))
            break;
        case '⬅️':
            console.log('delete');
            if (buffer.length === 1) {
                buffer = '0'
            }
            else {
                buffer = buffer.substring(0, buffer.length - 1)
            }
            break;
        case '-':
        case '+':
        case 'x':
        case '/':
            handleMath(symbol)
            console.log('math symbol');
            break;
    }
}

function handleMath (value) {
    if (buffer === '0'){
        return;
    }
    const intBuffer = parseInt(buffer)
    if (runningTotal === 0){
        runningTotal = intBuffer
    }
    else{
        flushOperation(intBuffer)
    }
    previousOperator = value;
    buffer = '0'
    // console.log('runnignTOtal', runningTotal);
    
}
function flushOperation(intBuffer) {
    if (previousOperator === '+'){
        runningTotal += intBuffer
    }
    else if(previousOperator === '-'){
        runningTotal -= intBuffer
    }
    else if(previousOperator === 'x'){
        runningTotal *= intBuffer
    } 
    else if(previousOperator === '/'){
        runningTotal /= intBuffer
    }


}
function handleNumber(number) {
    // console.log('number');
    if (buffer === '0') {
        buffer = number
    }
    else {
        buffer += number
    }
    console.log("buffer", buffer);


}

function init() {
    console.log("hi");

    document
        .querySelector('.calc-buttons')
        .addEventListener("click", function (event) {
            buttonClick(event.target.innerText);
        });

}

function reRender() {
    screen.innerText = buffer
}

init()