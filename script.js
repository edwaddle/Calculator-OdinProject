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
operator.forEach((element) =>{
    element.onclick = () => {
        let firstNum = display.textContent;
        display.textContent="";
        console.log(element.classList);
        if (element.classList.contains("add")){
            console.log("working");
            equal.onclick = () => display.textContent = parseFloat(display.textContent) + parseFloat(firstNum);
        }
        else if (element.classList.contains("subtract")){
            console.log("working");
            equal.onclick = () => display.textContent = parseFloat(display.textContent) - parseFloat(firstNum);
        }
        else if (element.classList.contains("multiply")){
            console.log("working");
            equal.onclick = () => display.textContent = parseFloat(display.textContent) * parseFloat(firstNum);
        }
        else if (element.classList.contains("divide")){
            console.log("working");
            equal.onclick = () => display.textContent = parseFloat(display.textContent) / parseFloat(firstNum);
        }
    }
})


