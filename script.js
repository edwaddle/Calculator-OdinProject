const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equal = document.querySelector(".equal");

const number = document.querySelectorAll(".number");

const display = document.querySelector(".display");
number.forEach((element) => {
    element.onclick = () =>{
        display.textContent += element.value;
    }
})

const operator = document.querySelectorAll(".operator");
add.onclick = () =>{
    let firstNum = display.textContent;
    display.textContent="";
    equal.onclick = () => {display.textContent = parseFloat(display.textContent) + parseFloat(firstNum);}
}


