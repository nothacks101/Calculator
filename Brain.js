var num1 =0;
var op;
var num2 =0;
var opeshown = false;
var numbuilder = false;
const btnum = document.querySelectorAll(".number");
const btnop = document.querySelectorAll(".ope");
const btnequal = document.querySelector("#equal");
const btnclr = document.querySelector("#clear");
var sn = document.createElement('e');
document.querySelector('#num').appendChild(sn);

btnclr.addEventListener("click", function(e){
    num1 = 0;
    num2 = 0;
    op = "";
    opeshown = false;
    numbuilder = false;
    sn.textContent = "";
});

btnum.forEach(function(button) {
    button.addEventListener("click", function(e) {
        buildnum(parseInt(e.target.innerHTML));
    });
});
btnop.forEach(function(button) {
    button.addEventListener("click", function(e) {
        if(!opeshown){
            op = e.target.innerHTML;
            numbuilder = !numbuilder;
            opeshown = true;
        }
        else{
            showres();
            op = e.target.innerHTML;
            numbuilder = ! numbuilder;
        }
        console.log(`${num1} - ${num2} - ${numbuilder}`)
    });
});
btnequal.addEventListener("click", showres);
    
function showres(){
    let ans = operate();
    sn.textContent = ans;
    num2 = 0;
    num1 = ans;
    numbuilder = ! numbuilder;
    return num1;
}`                              `
function buildnum(add){
    if(numbuilder){
        num2*=10;
        num2 += add;
        sn.textContent = `${num2}`;
    }
    else{
        num1 *= 10;
        num1 += add;
        sn.textContent = `${num1}`;
    }
}




function add(num1, num2){
    return num1+num2;
}
function subtract(num1, num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}

function operate(){
    let ans;
    switch(op){
        case "+":
            ans = add(num1,num2);
            break;
        case "-":
            ans = subtract(num1,num2);
            break;
        case "*":
            ans = multiply(num1,num2);
            break;
        case "/":
            ans = divide(num1,num2);
            break;
    }
    return ans;
}