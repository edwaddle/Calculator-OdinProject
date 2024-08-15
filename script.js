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
            equal.onclick = () => {
                display.textContent = Math.round((parseFloat(firstNum) + parseFloat(display.textContent)) *100000000.0) / 100000000;
            }
        }
        else if (element.classList.contains("subtract")){
            equal.onclick = () => {
                display.textContent = Math.round((parseFloat(firstNum) - parseFloat(display.textContent)) *100000000.0) / 100000000;
            }
        }
        else if (element.classList.contains("multiply")){
            equal.onclick = () => {
                display.textContent = Math.round((parseFloat(firstNum) * parseFloat(display.textContent)) *100000000.0) / 100000000;
            }
        }
        else if (element.classList.contains("divide")){
            equal.onclick = () => {
                if (display.textContent === '0'){ display.textContent = "ERROR";}
                else{
                    console.log(parseFloat(firstNum) / parseFloat(display.textContent)*10000);
                    display.textContent = Math.round((parseFloat(firstNum) / parseFloat(display.textContent)) *100000000.0) / 100000000;}
            }
        }
    }
})

clear.onclick = () => display.textContent="";




