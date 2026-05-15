let band1 = document.querySelector("#band1");
let band2 = document.querySelector("#band2");
let multiplier = document.querySelector("#multiplier");
let tolerance = document.querySelector("#tolerance");

let clr1 = document.querySelector("#clr1");
let clr2 = document.querySelector("#clr2");
let clr3 = document.querySelector("#clr3");
let clr4 = document.querySelector("#clr4");

let output = document.querySelector("#output");

let b1 = 0;
let b2 = 0;
let mul = 0;
let tol = 0;

band1.addEventListener("change",() => {
    clr1.style.backgroundColor = band1.options[band1.selectedIndex].text;
    b1 = Number(band1.value);
    calculate();
});

band2.addEventListener("change",() => {
    clr2.style.backgroundColor = band2.options[band2.selectedIndex].text;
    b2 = Number(band2.value);
    calculate();
});

multiplier.addEventListener("change",() => {
    clr3.style.backgroundColor = multiplier.options[multiplier.selectedIndex].text;
    mul = Number(multiplier.value);
    calculate();
});

tolerance.addEventListener("change",() => {
    clr4.style.backgroundColor = tolerance.options[tolerance.selectedIndex].text;
    tol = Number(tolerance.value);
    calculate();
});

function calculate(){
    let result = ((b1*10)+b2)*(10**mul);
    if(result >= 1000000){
        result /= 1000000;
        output.innerText = `Resistance : ${result}MΩ  ±${tol}%`;
    }else if(result >= 1000){
        result /= 1000;
        output.innerText = `Resistance : ${result}kΩ  ±${tol}%`;
    }else{
        output.innerText = `Resistance : ${result}Ω  ±${tol}%`;
    }
}

button.addEventListener("click",() => {
    band1.value="0";
    band2.value="0";
    multiplier.value="0";
    tolerance.value="1";

    clr1.style.backgroundColor = "black";
    clr2.style.backgroundColor = "black";
    clr3.style.backgroundColor = "black";
    clr4.style.backgroundColor = "brown";

    b1=0;
    b2=0;
    mul=0;
    tol=0;

    output.innerText="Resistance : ";
});
