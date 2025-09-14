document.getElementById("sunny").onclick = () =>{
    document.getElementById("line-one").innerHTML="Here comes the Sun";
    document.getElementById("line-two").innerHTML="Sun";
    document.getElementById("line-three").innerHTML="Sun";
    document.getElementById("line-three").style.paddingLeft="20px";
    document.getElementById("line-four").innerHTML="Sun";
    document.getElementById("line-four").style.paddingLeft="40px";
    document.getElementById("line-five").innerHTML="Here it Comes";
}

document.getElementById("color-pick").oninput = (event) =>{
    const colorInput = event.currentTarget.value;
    document.getElementById("color-p").innerHTML=`Your color code is: ${colorInput}`;
    document.getElementById("color-p").style.color=colorInput;
};

document.getElementById("image").onclick = ()=>{
    document.getElementById("image").src = "images/sun.jpg"
};