const dog1 = [];
dog1["Annie"] = "images/annie_b.jpg";
dog1["Nealy"] = "images/nealy_b.jpg";
dog1["Lincoln"] = "images/lincoln_b.jpg";

const dog2 = [];
dog2["Annie"] = "images/annie_a.jpg";
dog2["Nealy"] = "images/nealy_a.jpg";
dog2["Lincoln"] = "images/lincoln_a.jpg";




function initialize(){
    for(let dog in dog1){
        const section = document.createElement("section");
        section.classList.add("dog");
        const img = document.createElement("img");

        const caption = document.createElement("section");
        caption.classList.add("caption");
        caption.classList.add("hidden")
        caption.innerHTML = `Adopt ${dog}!`;

        img.src = dog1[dog];
        section.append(img);
        section.append(caption);
        document.getElementById("dogs").append(section);

        section.onmouseover=()=>{
            caption.classList.remove("hidden");
        }
        section.onmouseout=()=>{
            caption.classList.add("hidden");
        }
        
        section.onclick=()=>{
            document.getElementById("popup").classList.remove("hidden");
            document.getElementById("title").innerHTML=`${dog} after adoption`;
            document.getElementById("after").src=dog2[dog];
        }
    }
}

document.getElementById("close").onclick=()=>{
    document.getElementById("popup").classList.add("hidden");
}

initialize();