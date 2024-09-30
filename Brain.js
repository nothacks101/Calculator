var num1 = 0;
var op;
var num2 = 0;
var opeshown = false;
const btnum = document.querySelectorAll(".number");
const btnop = document.querySelectorAll(".ope");
const btnequal = document.querySelector("#equal");
var sn2 = document.createElement('e');
var sn1 = document.createElement('e');
var sop = document.createElement('e');
var eq = document.createElement('e');



btnum.forEach(function(button) {
    button.addEventListener("click", function(e) {
        console.log(e.target.innerHTML);
        buildnum(e.target.innerHTML)
        console.log(num1 + "   hi ther "+ num2);
    });
});
btnop.forEach(function(button) {
    button.addEventListener("click", function(e) {
        if(opeshown === false){
            console.log(e.target.innerHTML);
            op = e.target.innerHTML
            sop.textContent = `${op}`
            document.querySelector('#oper').appendChild(sop);
            opeshown = true;
        }
        else{
            let ans = showres();
            num1 = ans;
            document.removeChild();
            document.querySelector('#num1').appendChild(sn1);
        }
    });
});
btnequal.addEventListener("click", showres);
    
function showres(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let ans = operate();
    eq.textContent = `= ${ans}`
    document.querySelector('#ans').appendChild(eq);
    console.log(ans);
    return ans;
}
function buildnum(add){
    if(opeshown){
        num2 += add;
        sn2.textContent = `${num2}`
        document.querySelector('#num2').appendChild(sn2);
    }
    else{
        num1 += add;
        sn1.textContent = `${num1}`
        document.querySelector('#num1').appendChild(sn1);
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