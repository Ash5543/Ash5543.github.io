//toggle nav
document.getElementById("toggle-nav").onclick = () =>{
    document.getElementById("arrow-up").classList.toggle("hidden");
    document.getElementById("arrow-down").classList.toggle("hidden");
    document.getElementById("nav-items").classList.toggle("hide-small");
};
document.getElementById("one").onclick = () =>{
    document.getElementById("planting").classList.remove("hidden");
    document.getElementById("clock").classList.add("hidden");
}
document.getElementById("two").onclick = () =>{
    document.getElementById("clock").classList.remove("hidden");
    document.getElementById("planting").classList.add("hidden");
}


//planting
document.getElementById("days").onchange = (event) =>{
    const count = document.getElementById("days").value;
    const img =document.getElementById("plant");
    const days = document.getElementById("day-p");
    const message=document.getElementById("message");
    if(count<=2){
        plant.src="images/img1.webp";
        days.innerHTML=`It has been ${count} days since you've watered your plant`;
        message.innerHTML="Your plant is healthy and happy"
    }
    else if(count<=5){
        plant.src="images/img2.webp";
        days.innerHTML=`It has been ${count} days since you've watered your plant`;
        message.innerHTML="Your plant needs watering"
    }
    else if(count<=9){
        plant.src="images/img3.jpg";
        days.innerHTML=`It has been ${count} days since you've watered your plant`;
        message.innerHTML="Leaves are dropping and the color is changing, water soon"
    }
    else{
        plant.src="images/img4.jpg";
        days.innerHTML=`It has been ${count} days since you've watered your plant`;
        message.innerHTML="Sorry, your plant is not longer with us"
    }
}

//clock
function startTime(){
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    document.getElementById("time").innerHTML=`${h} : ${m}`;
    setTimeout(startTime, 1000);
}
startTime();