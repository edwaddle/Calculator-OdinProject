const equal = document.querySelector(".equal");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");

number.forEach((element) => {
    element.onclick = () =>{
        if (element.value === 'neg'){display.textContent *= -1;}
        else{display.textContent += element.value;}
    }
})

operator.forEach((element) =>{
    element.onclick = () => {
        let firstNum = display.textContent;
        display.textContent="";
        console.log(element.classList);
        if (element.classList.contains("add")){
            console.log("working");
            equal.onclick = () => display.textContent = parseFloat(firstNum) + parseFloat(display.textContent);
        }
        else if (element.classList.contains("subtract")){
            console.log("working");
            equal.onclick = () => display.textContent = parseFloat(firstNum) - parseFloat(display.textContent);
        }
        else if (element.classList.contains("multiply")){
            console.log("working");
            equal.onclick = () => display.textContent = parseFloat(firstNum) * parseFloat(display.textContent);
        }
        else if (element.classList.contains("divide")){
            console.log("working");
            equal.onclick = () => display.textContent = parseFloat(firstNum) / parseFloat(display.textContent);
        }
    }
})

clear.onclick = () => display.textContent="";




