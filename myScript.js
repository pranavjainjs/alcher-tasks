fun1();
fun2();
fun3();

var str1 = "Lorem Ipsum Dolor <span>Lorem Ipsum</span>";
var str_btn1 = "You have clicked button 1"
var str_btn2 = "You have clicked button 2"

document.getElementById("heading").innerHTML=str1;
function fun1() {
    document.getElementById("heading").innerText=str_btn1;
}
function fun2() {
    document.getElementById("heading").innerText=str_btn2;
}
function fun3() {
    document.getElementById("heading").innerHTML=str1;
}

document.getElementById("btn1").onclick = function() {fun1()};
document.getElementById("btn2").onclick = function() {fun2()};
document.getElementById("reset").onclick = function() {fun3()};