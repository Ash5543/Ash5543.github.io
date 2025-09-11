/*
const sayHello = () =>{
    console.log("hello world");
}

document.getElementById("btn-click-me").onclick = sayHello;  parentheses calls the function on refresh, const for variables
*/

document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML="Hello World";
    event.currentTarget.classList.add("clicked"); //currentTarget is the button that was clicked
};

document.getElementById("happy").onclick = (event) => {
    document.getElementById("paragraph").innerHTML="yay";
    event.currentTarget.classList.add("happyclicked");
};
document.getElementById("sad").onclick = (event) => {
    document.getElementById("paragraph").innerHTML="nay";
    event.currentTarget.classList.add("sadclicked");
};
document.getElementById("clear").onclick = (event) => {
    document.getElementById("paragraph").innerHTML="";
    document.getElementById("happy").classList.remove("happyclicked");
    document.getElementById("sad").classList.remove("sadclicked");
};

//input type = color

document.getElementById("txt-emotion").onkeyup = (event) =>{
    const userInput = event.currentTarget.value;
    document.getElementById("p-emotion").innerHTML=`You are feeling ${userInput}`;
    document.getElementById("img-emotion").classList.remove("hidden");
};

//.style.color for color picker