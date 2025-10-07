const getSandwiches=async()=>{
    const url = "https://ash5543.github.io/csce242/projects/part6/json/sandwiches.json"
    try{
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.log(error);
    }
};

const showSandwiches=async()=>{
    const sandwiches = await getSandwiches();
    const hotmenu = document.getElementById("hot-menu");
    const coldmenu = document.getElementById("cold-menu");

    sandwiches.forEach((sandwich)=>{
        const section = document.createElement("section");
        section.classList.add("menu-option");
        const img = document.createElement("img");
        img.src=`json/images/${sandwich.img}`;
        const h3 = document.createElement("h3");
        h3.innerHTML=sandwich.name;
        section.append(img);
        section.append(h3);
        if(sandwich.hot=="true"){
            hotmenu.append(section);
        }
        else{
            coldmenu.append(section);
        }
        section.onclick=()=>{
            //popup shite
        };
    });
}

showSandwiches();
