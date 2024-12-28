console.log("Hello World");
let buffer = '0'
const screen = document.querySelector('.screen')

function buttonClick(value) {
    if(isNaN(parseInt(value))) {
        handleSymbol(value)
    }
    else{
        handleNumber(value)
    }
// console.log(value);
reRender()

}
function handleSymbol (symbol) {
// console.log('symbol');

}
function handleNumber (number) {
// console.log('number');
if (buffer === '0'){
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
        .addEventListener("click", function(event) {
            buttonClick(event.target.innerText);
        });

}

function reRender () {
    screen.innerText = buffer
}

init()