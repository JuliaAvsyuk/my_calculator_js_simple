function sum() {
    let num1, num2, res;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    res = num1 + num2;
    document.getElementById('res').innerHTML = res;
}
function sub() {
    let num1, num2, res;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    res = num1 - num2;
    document.getElementById('res').innerHTML = res;
}
function mul() {
    let num1, num2, res;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    res = num1 * num2;
    document.getElementById('res').innerHTML = res;
}
function div() {
    let num1, num2, res;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    res = num1 / num2;
    document.getElementById('res').innerHTML = res;
}




