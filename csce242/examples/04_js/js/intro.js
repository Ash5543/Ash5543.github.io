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
document.getElementById("show").onclick = () =>{
    const color=document.getElementById("color-emotion").value.trim().toLowerCase();
    const p = document.getElementById("result");
    const error=document.getElementById("error-color");
    error.innerHTML="";//reset error
    p.innerHTML="";

    let mood="";  //constants stay constant, cant change, let is for variables that change

    if(color==""){
        error.innerHTML="*blank";
        return;
    }
    if(color=="red"){
        mood="mad";
    }
    else if(color=="blue"){
        mood="sad"
    }
    else if(color=="yellow"){
        mood="happy"
    }

    if(mood==""){
        error.innerHTML="*invalid color";
        return;
    }

    p.innerHTML=`You are ${mood}`;

};
//generic block level = div, generic inline = span

//onchange, input type=range, get value

document.getElementById("btn-bounce").onclick = (event) =>{
    const ball = document.getElementById("ball");
    if(ball.classList.contains("bounce")){
        event.currentTarget.innerHTML="Start";
    }
    else{
        event.currentTarget.innerHTML="Stop";
    }

    ball.classList.toggle("bounce");

}


