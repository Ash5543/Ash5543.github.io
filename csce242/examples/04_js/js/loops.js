document.getElementById("display").onclick = () =>{
    const section = document.getElementById("loop-results");
    const ul=document.createElement("ul");
    section.append(ul);

    //loop
    for(let i=0; i<10; i++){
        const li = document.createElement("li");
        li.innerHTML=`${i} thing`;
        ul.append(li);
    }
    //6 sections for clouds with class of cloud, css art to make cloud, day+night class
}

document.getElementById("count").onclick = () =>{
    const error = document.getElementById("error-number");
    error.innerHTML="";

    const startNum = parseInt(document.getElementById("start").value);
    const endNum = parseInt(document.getElementById("end").value);

    const div = document.getElementById("d-count");
    div.innerHTML="";

    if(startNum>endNum){
        error.innerHTML="*second num has to be larger than first";
    }

}