/*
const sayHello = () =>{
    console.log("hello world");
}

document.getElementById("btn-click-me").onclick = sayHello;  parentheses calls the function on refresh, const for variables
*/

document.getElementById("btn-click-me").onclick = () => {
    console.log("hello world");
};