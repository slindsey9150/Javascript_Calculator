console.log("Hello World");

function buttonClick(value) {
console.log(value);

}

function init() {
    console.log("hi");
    
    document
        .querySelector('.calc-buttons')
        .addEventListener("click", function(event) {
            buttonClick(event.target.innerText);
        });

}

init()